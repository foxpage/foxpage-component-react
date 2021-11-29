import React from 'react';
import {
  RenderContext,
  FoxpageStaticComponent,
  BrowserInitialState,
  StructureNode,
  BrowserResource,
  BrowserStructure,
  BrowserModule,
  FoxpageComponent,
} from '@foxpage/foxpage-types';
import { ComponentProps } from './typing';

const ReactCSREntry: React.FC<ComponentProps> & FoxpageStaticComponent = props => {
  const { data, entryLink, children } = props;
  const { url, async = true } = entryLink || ({} as ComponentProps['entryLink']);

  let innerStr = '';
  if (typeof data === 'object') {
    innerStr = JSON.stringify(data);
  } else {
    innerStr = data;
  }

  return (
    <>
      <div id="foxpage-app">{children}</div>
      {data && (
        <script
          id="__foxpage_data__"
          type="application/json"
          dangerouslySetInnerHTML={{ __html: innerStr.replace(/<\//g, '<\\/') }}
        />
      )}
      {url && <script src={url} async={!!async} />}
    </>
  );
};

/**
 * define before node build hook
 * @param ctx render context
 * @param node current node info
 * @returns formatted data
 */
ReactCSREntry.beforeNodeBuild = (ctx: RenderContext, node: StructureNode) => {
  const initPage = () => ({
    appId: ctx.appId,
    slug: ctx.appSlug,
    pageId: ctx.page.id,
  });

  const structures: BrowserStructure[] = [];
  const initStructures = (list: StructureNode[] = []) => {
    if (list.length > 0) {
      list.forEach(item => {
        let childrenIds: string[] = [];
        if (item.children) {
          initStructures(item.children);
          childrenIds = item.children.map(child => child.id);
        }
        structures.push({
          id: item.id,
          name: item.name,
          props: item.props,
          version: item.version,
          childrenIds,
        });
      });
    }
  };
  initStructures(ctx.page.schemas);

  const generateKey = (name: string, version?: string) => `${name}@${version || ''}`;

  const initModules = () => {
    const modules: BrowserModule[] = [];
    const doneList: string[] = [];
    const moduleFormat = (list: FoxpageComponent[]) => {
      list.forEach(item => {
        const key = generateKey(item.name, item.version);
        if (item && doneList.indexOf(key) === -1) {
          doneList.push(key);
          modules.push({
            name: item.name,
            version: item.version,
            url: item.browserURL,
            deps: item.dependencies,
            meta: item.meta,
          });
        }
      });
    };
    moduleFormat(Array.from(ctx.componentMap?.values() || []));
    moduleFormat(Array.from(ctx.dependencies?.values() || []));
    return modules;
  };

  const resource: BrowserResource = {
    requirejsLink: ctx.frameworkResource?.requirejsLink || '',
    libs: ctx.frameworkResource?.libs || {},
  };

  const state: BrowserInitialState = {
    root: node.id,
    page: initPage(),
    modules: initModules(),
    structures,
    resource,
    option: {
      renderMethod: ctx.options?.renderMethod || 'render',
    },
  };
  return { data: state };
};

export default ReactCSREntry;

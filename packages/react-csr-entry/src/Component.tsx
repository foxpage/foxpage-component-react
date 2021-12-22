import React from 'react';
import {
  Context,
  FoxpageStaticComponent,
  BrowserInitialState,
  StructureNode,
  BrowserModule,
  FoxpageComponent,
} from '@foxpage/foxpage-types';
import { ComponentProps } from './typing';

const ReactCSREntry: React.FC<ComponentProps> & FoxpageStaticComponent = props => {
  const { injection, entryLink, children } = props;
  const { url, async = true } = entryLink || ({} as ComponentProps['entryLink']);

  let innerStr = '';
  if (typeof injection === 'object') {
    innerStr = JSON.stringify(injection);
  } else {
    innerStr = injection || '';
  }

  return (
    <>
      <div id="foxpage-app">{children}</div>
      {injection && (
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
ReactCSREntry.beforeNodeBuild = (ctx: Context, node: StructureNode): Partial<ComponentProps> => {
  const initPage = () => ({
    appId: ctx.appId,
    slug: ctx.appSlug,
    pageId: ctx.page.id,
  });

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

  const state: BrowserInitialState = {
    root: node.id,
    page: initPage(),
    modules: initModules(),
    structures: Array.from(ctx.structureMap?.values() || []),
    resource: {
      requirejsLink:
        (node.props as ComponentProps)?.resource?.requirejsLink || ctx.frameworkResource?.requirejsLink || '',
      libs: { ...((node.props as ComponentProps)?.resource?.libs || {}), ...(ctx.frameworkResource?.libs || {}) },
    },
    option: {
      renderMethod: ctx.options?.renderMethod || 'render',
    },
  };
  return { injection: state };
};

export default ReactCSREntry;

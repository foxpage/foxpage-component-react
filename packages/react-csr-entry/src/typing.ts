export interface ComponentProps {
  injection?: { [key: string]: any };
  resource: {
    requirejsLink: string;
    libs: Record<string, any>;
  };
  entryLink: {
    url: string;
    async?: boolean;
  };
}

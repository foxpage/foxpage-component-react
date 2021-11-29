export interface ComponentProps {
  data: { [key: string]: any };
  entryLink: {
    url: string;
    async?: boolean;
  };
}

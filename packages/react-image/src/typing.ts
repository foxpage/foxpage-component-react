export interface ComponentProps {
  src: string;
  alt?: string;
  style?: {
    [index: string]: any;
  };
  attrs: {
    [index: string]: any;
  };
}

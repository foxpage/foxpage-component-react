export interface ComponentProps {
  /**
   * button text
   */
  text: string;
  /**
   * [function] description...
   */
  onClick: (...args: any[]) => any;
}

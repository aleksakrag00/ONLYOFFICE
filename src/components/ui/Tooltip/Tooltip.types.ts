export interface ITooltip {
  /** The unique identifier. */
  id: string;
  /** Additional CSS class names. */
  className?: string;
  /** The text or content to be displayed inside the tooltip. */
  content: string;
  /** The element that triggers the tooltip on hover or focus. */
  children?: React.ReactNode;
  /** Enable info icon */
  infoIcon?: boolean;
  /** Enable floating position */
  float?: boolean;
  /** Tooltip offset */
  offset?: number;
  /** Tooltip placement */
  place?:
    | "top"
    | "top-start"
    | "top-end"
    | "right"
    | "right-start"
    | "right-end"
    | "bottom"
    | "bottom-start"
    | "bottom-end"
    | "left"
    | "left-start"
    | "left-end";
  /** Tooltip width */
  width?: string;
}

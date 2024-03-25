export interface NProgressOptions {
  minimum?: number;
  template?: string;
  easing?: string;
  speed?: number;
  trickle?: boolean;
  trickleSpeed?: number;
  showSpinner?: boolean;
  parent?: string;
  positionUsing?: string;
  barSelector?: string;
  spinnerSelector?: string;
}

export interface ProgressBarProps {
  color?: string;
  height?: string;
  options?: Partial<NProgressOptions>;
  shallowRouting?: boolean;
  delay?: number;
  style?: string;
}

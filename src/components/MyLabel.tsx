import type { FC } from 'react';
import './MyLabel.css';

export interface MyLabelProps {
  /**
   * Text to display.
   */
  label: string;

  /**
   * Label size.
   */
  size?: 'normal' | 'h1' | 'h2' | 'h3';

  /**
   * Whether to display the label in uppercase.
   */
  allCaps?: boolean;

  /**
   * Label color.
   */
  color?: 'primary' | 'secondary' | 'tertiary';

  /**
   * Custom font color (overrides color prop).
   */
  fontColor?: string;

  /**
   * Custom background color.
   */
  backgroundColor?: string;
}

export const MyLabel: FC<MyLabelProps> = ({
  label,
  size = 'normal',
  allCaps = false,
  color = 'primary',
  fontColor,
  backgroundColor = 'transparent',
}) => {
  return (
    <span
      className={`label ${size} text-${color} ${allCaps ? 'uppercase' : ''}`}
      style={{
        color: fontColor,
        backgroundColor,
      }}
    >
      {label}
    </span>
  );
};

type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;

type Font = {
  /**
   * Font-family
   * @default 'initial'
   * @since 1.0.0
   */
  family?: string;

  /**
   * Font-style
   * @default 'normal'
   * @since 1.0.0
   */
  style?: 'normal' | 'italic' | 'oblique' | 'initial' | 'inherit';

  /**
   * Font-variant
   * @default 'normal'
   * @since 1.0.0
   */
  variant?: 'normal' | 'small-caps' | 'initial' | 'inherit';

  /**
   * Font-weight
   * @default 'normal'
   * @since 1.0.0
   */
  weight?: 'normal' | 'bold' | 'bolder' | 'lighter' | number | 'initial' | 'inherit';

  /**
   * Font-size
   * @default '14px'
   * @since 1.0.0
   */
  size?: `${number}cm` | `${number}mm` | `${number}in` | `${number}px` | `${number}pt` | `${number}pc` | `${number}em` | `${number}ex` | `${number}ch` | `${number}rem` | `${number}vw` | `${number}vh` | `${number}vmin` | `${number}vmax` | `${number}%`;
};

export interface Options {
  /**
   * The text in the center of doughnut chart.
   * @since 1.0.0
   */
  text: string;

  /**
   * The font object for styling text.
   * @since 1.0.0
   */
  font?: Font;

  /**
   * The color of the text.
   * @since 1.0.0
   */
  color?: RGB | RGBA | HEX;
}

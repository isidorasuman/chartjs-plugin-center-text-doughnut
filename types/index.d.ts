import {ChartType, Plugin} from 'chart.js';
import {Options} from './options';

declare module 'chart.js' {
  interface ChartDoughnutCenterTextProperties<TType extends ChartType> {
    /**
     * Plugin options
     *
     * @since 1.0.0
     */
    doughnutCenterText?: Options;
  }
}

declare const plugin: Plugin;

export default plugin;

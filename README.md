## Overview

Greatly adaptive [Chart.js](https://www.chartjs.org/) plugin that provides proper text centering within Doughnut Chart, even if additional options (for example: legend) are included.

Requires [Chart.js](https://github.com/chartjs/Chart.js/releases) **3.x**.

## Installation

```
npm i chartjs-plugin-center-text-doughnut
```

## Usage

```javascript
import ChartDoughnutCenterTextPlugin from 'chartjs-plugin-center-text-doughnut';
```

Once imported, the plugin needs to be registered.

```javascript
var chart = new Chart(ctx, {
  plugins: [ChartDoughnutCenterTextPlugin],
  options: {
    // ...
  }
})
```

The plugin options can be changed in order to customize text and its style.
```javascript
new Chart(ctx, {
  plugins: [
    // ... other plugins
    ChartDoughnutCenterTextPlugin
  ],
  options: {
    // ... other options
    plugins: {
      doughnutCenterText: {
        text: "Test",
        color: '#FF0000',
        font: {
          family: 'Arial',
          size: '14px',
          weight: 700,
          style: 'italic', 
          variant: 'small-caps',
        }
      }
    }
  }
});
```

## Development

You first need to install node dependencies (requires [Node.js](https://nodejs.org/)):

```
npm install
```

The following commands will then be available from the repository root:

```
npm run build            // build dist files
npm run build:dev        // build and watch for changes
```

## License

`chartjs-plugin-center-text-doughnut` is available under the [MIT license](LICENSE.md).

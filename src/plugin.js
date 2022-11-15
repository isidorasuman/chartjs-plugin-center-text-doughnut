export default {
  id: 'doughnutCenterText',
  afterDraw: (chart, args, options) => {
    if (chart.config.options.plugins.doughnutCenterText) {
      // Get context
      const ctx = chart.ctx;

      // Get `text` from options (defaults to an empty string)
      const text = options?.text || '';

      // Get `color` from options
      const color = options?.color;

      // Get `font` from options (with default values)
      const font = {
        style: options?.font?.style || 'normal',
        variant: options?.font?.variant || 'normal',
        weight: options?.font?.weight || 'normal',
        size: options?.font?.size || '14px',
        family: options?.font?.family || 'initial'
      }

      // Calculate text coordinates
      let coordinates = [
        Math.round((chart.chartArea.right + chart.chartArea.left - ctx.measureText(text).width) / 2),
        Math.round((chart.chartArea.top + chart.chartArea.bottom) / 2)
      ];

      // Restore context
      ctx.restore();

      // Set font style, variant, weight, size and family
      ctx.font = `${font.style} ${font.variant} ${font.weight} ${font.size} ${font.family}`;

      // Set text's baseline to `middle`
      ctx.textBaseline = "middle";

      // If the color is defined, set it
      if (color) {
        ctx.fillStyle = color;
      }

      // Fill the context with the actual text within calculated coordinates
      ctx.fillText(text, ...coordinates);

      // Save the context
      ctx.save();
    }
  },
};

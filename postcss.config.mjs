/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    // Fix known CSS flexbox issues in older browsers
    "postcss-flexbugs-fixes": {},

    // Enable modern CSS features using stage 3+ features
    "postcss-preset-env": {
      autoprefixer: {
        flexbox: "no-2009",
        grid: "autoplace",
      },
      features: {
        "custom-properties": false, // Already supported in modern browsers
        "nesting-rules": true, // Enable CSS nesting
        "custom-media-queries": true, // Enable @custom-media
        "gap-properties": true, // Enable gap properties for flexbox
        "color-function": true, // Enable modern color functions
      },
      stage: 3, // Use stage 3+ CSS features
    },

    // Process Tailwind directives and utilities
    tailwindcss: {},

    // Handle browser compatibility
    autoprefixer: {
      // Automatically use .browserslistrc or package.json browserslist
      grid: "autoplace", // Better grid support
    },

    // Production-only plugins
    ...(process.env.NODE_ENV === "production"
      ? {
          // Minify CSS in production
          cssnano: {
            preset: [
              "default",
              {
                discardComments: {
                  removeAll: true,
                },
                normalizeWhitespace: true,
                minifyFontValues: {
                  removeQuotes: false, // Keep quotes around font names
                },
                // Be careful with these optimizations as they might break utility classes
                mergeLonghand: false,
                mergeRules: false,
                // Disable SVG optimization if you use SVG in CSS
                svgo: false,
              },
            ],
          },
        }
      : {}),
  },
};

export default config;

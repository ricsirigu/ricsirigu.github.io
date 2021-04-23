module.exports = {
  theme: {
    extend: {
      typography: {
        default: {
          css: {
            "code::before": false,
            "code::after": false,
            "blockquote p:first-of-type::before": false,
            "blockquote p:last-of-type::after": false,
          }
        }
      }
    }
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
  ]
};

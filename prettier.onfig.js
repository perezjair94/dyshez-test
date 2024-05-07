const styleguide = require("@vercel/style-guide/prettier");

module.exports = {
  ...styleguide,
  tailwindFunctions: ["clsx"],
  plugins: [...styleguide.plugins, "prettier-plugin-tailwindcss"],
};

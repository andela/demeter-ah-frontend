const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  plugins: [tailwindcss, autoprefixer],
};

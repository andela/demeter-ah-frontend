const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const dotenv = require('dotenv');

dotenv.config();

const purgecss = require('@fullhuman/postcss-purgecss')({
  // Specify the paths to all of the template files in your project
  content: [
    'src/**/*.html',
    'src/**/*.css',
    'src/**/*.js',
    'src/**/*.scss',
    // etc.
  ],
  // Include any special characters you're using in this regular expression
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [],
});

module.exports = {
  plugins: [tailwindcss, autoprefixer, ...(process.env.NODE_ENV === 'lost' ? [purgecss] : [])],
};

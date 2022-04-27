// craco.config.js
module.exports = {
  style: {
    postcss: {
      //commenting this out due to dependency error 
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
};

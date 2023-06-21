module.exports = {
  reactStrictMode: true,
  // I don't want it to run when compiling as I trust the CI stage of the pipeline and Husky.
  ignoreDuringBuilds: true,
  images: {
    domains: ['lh3.googleusercontent.com', 'f4.bcbits.com', 'images.squarespace-cdn.com', 'i.imgur.com'],
    // disableStaticImages: true,
  },
};

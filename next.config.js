  module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["raw.githubusercontent.com"],
  },

  webpack(config, options) {
    config.module.rules.push({
      test: /\.mp3$/,
      use: {
        loader: "file-loader",
      },
    });
    return config;
  },
};

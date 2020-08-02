module.exports = {
  webpack(config, { isServer }) {
    if (isServer) {
      config.resolve.mainFields = ["module", "main"];

      // Fix all packages that this change breaks:
      config.resolve.alias["node-fetch"] = "node-fetch/lib/index.js";
    }
    return config;
  },
};

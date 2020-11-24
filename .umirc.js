export default {
  exportStatic: {},
  outputPath: "/host",
  nodeModulesTransform: {
    type: "none",
    exclude: [],
  },
  mode: "site",
  title: "xy-lodash",
  favicon: "/favicon.ico",
  logo: "/logo.png",
  dynamicImport: {},
  manifest: {},
  // links: [{ rel: 'manifest', href: '/asset-manifest.json' }],
  hash: true,
  resolve: {
    includes: ["docs", "src"],
  },
  links: [{ rel: "stylesheet", href: "/style.css" }],
  navs: {
    "zh-CN": [
      null,
      { title: "GitHub", path: "https://github.com/xylink-com/xy-lodash" },
    ],
    "en-US": [
      null,
      { title: "GitHub", path: "https://github.com/xylink-com/xy-lodash" },
    ],
  },
};

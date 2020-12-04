export default {
  exportStatic: {},
  outputPath: "/docs",
  nodeModulesTransform: {
    type: "none",
    exclude: [],
  },
  metas: [
    {
      name: "keywords",
      content: "xylink，tools，hook，toolkit，xylink-lodash，ak47",
    },
    {
      name: "description",
      content: "小鱼易连通用工具函数库",
    },
  ],
  mode: "site",
  title: "toolkit",
  base: "/toolkit",
  publicPath: "/toolkit/",
  favicon: "https://cdn.xylink.com/wechatMP/images/login.ico",
  logo: "/toolkit/logo.png",
  dynamicImport: {},
  manifest: {},
  // links: [{ rel: "manifest", href: "/asset-manifest.json" }],
  // links: [{ rel: "stylesheet", href: "/style.css" }],
  hash: true,
  resolve: {
    includes: ["guide", "src"],
  },
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

// @ts-nocheck
import React from 'react';
import { ApplyPluginsType, dynamic } from '/Users/jonsam/Company/Projects/Github/xy-lodash/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/",
    "component": (props) => require('react').createElement(require('../../../node_modules/@umijs/preset-dumi/lib/themes/default/layout.js').default, {
      ...{"menus":{"en-US":{"*":[{"path":"/","title":"xy-lodash - React utils Library of Xylink","meta":{}}],"/pages":[{"path":"/pages/getting-started","title":"Getting Started","meta":{"order":1}}]},"zh-CN":{"*":[{"path":"/zh-CN","title":"xy-lodash - React utils Library of Xylink","meta":{}}],"/zh-CN/pages":[{"path":"/zh-CN/pages/getting-started","title":"快速上手","meta":{"order":1}}]}},"locales":[{"name":"en-US","label":"English"},{"name":"zh-CN","label":"中文"}],"navs":{"en-US":[{"title":"Guide","order":1,"path":"/pages"},{"title":"GitHub","path":"https://github.com/xylink-com/xy-lodash"}],"zh-CN":[{"title":"指南","order":1,"path":"/zh-CN/pages"},{"title":"GitHub","path":"https://github.com/xylink-com/xy-lodash"}]},"title":"xy-lodash","logo":"/logo.png","mode":"site"},
      ...props,
    }),
    "routes": [
      {
        "path": "/",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__README.en-US.md' */'../../../docs/README.en-US.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/README.en-US.md",
          "updatedTime": 1606204675711,
          "title": "xy-lodash - React utils Library of Xylink",
          "hero": {
            "title": "a react util library",
            "desc": "<div class=\"markdown\"><p>Easy to use,</p></div>",
            "actions": [
              {
                "text": "Getting Started",
                "link": "/pages/getting-started"
              }
            ]
          },
          "features": [
            {
              "icon": "https://gw.alipayobjects.com/zos/bmw-prod/813f5ed9-6bc4-43d4-9f74-ec81ecf35733/k7htg6n4_w144_h144.png",
              "title": "Rich Collection",
              "desc": "<div class=\"markdown\"><p>ahooks contains a large set of essential react hooks, with demos and examples for each one of them.</p></div>"
            },
            {
              "icon": "https://gw.alipayobjects.com/zos/bmw-prod/7659205c-6637-4fa2-8529-d32e5818304b/k7htflfb_w144_h144.png",
              "title": "Detailed Tutorial",
              "desc": "<div class=\"markdown\"><p>Providing tutorials about using hooks in practice. An all-in-one place to learn for pro coders and newcomers.</p></div>"
            },
            {
              "icon": "https://gw.alipayobjects.com/zos/bmw-prod/6319a122-e8b8-497f-9b45-37cfbe77edaa/k7htfx7t_w144_h144.png",
              "title": "Ready for Production",
              "desc": "<div class=\"markdown\"><p>Used in hundreds of products in Alipay、Taobao、Tmall etc, with high quality and robustness.</p></div>"
            }
          ],
          "footer": "<div class=\"markdown\"><p>Open-source MIT Licensed | Copyright © 2020-xylink</p></div>",
          "slugs": [
            {
              "depth": 1,
              "value": "xy-lodash",
              "heading": "xy-lodash"
            },
            {
              "depth": 2,
              "value": "Dev",
              "heading": "dev"
            },
            {
              "depth": 2,
              "value": "License",
              "heading": "license"
            },
            {
              "depth": 2,
              "value": "list",
              "heading": "list"
            }
          ],
          "locale": "en-US"
        },
        "title": "xy-lodash - React utils Library of Xylink"
      },
      {
        "path": "/zh-CN",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__README.zh-CN.md' */'../../../docs/README.zh-CN.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/README.zh-CN.md",
          "updatedTime": 1606204681025,
          "title": "xy-lodash - React utils Library of Xylink",
          "hero": {
            "title": "a react util library",
            "desc": "<div class=\"markdown\"><p>Easy to use,</p></div>",
            "actions": [
              {
                "text": "Getting Started",
                "link": "/pages/getting-started"
              }
            ]
          },
          "features": [
            {
              "icon": "https://gw.alipayobjects.com/zos/bmw-prod/813f5ed9-6bc4-43d4-9f74-ec81ecf35733/k7htg6n4_w144_h144.png",
              "title": "Rich Collection",
              "desc": "<div class=\"markdown\"><p>ahooks contains a large set of essential react hooks, with demos and examples for each one of them.</p></div>"
            },
            {
              "icon": "https://gw.alipayobjects.com/zos/bmw-prod/7659205c-6637-4fa2-8529-d32e5818304b/k7htflfb_w144_h144.png",
              "title": "Detailed Tutorial",
              "desc": "<div class=\"markdown\"><p>Providing tutorials about using hooks in practice. An all-in-one place to learn for pro coders and newcomers.</p></div>"
            },
            {
              "icon": "https://gw.alipayobjects.com/zos/bmw-prod/6319a122-e8b8-497f-9b45-37cfbe77edaa/k7htfx7t_w144_h144.png",
              "title": "Ready for Production",
              "desc": "<div class=\"markdown\"><p>Used in hundreds of products in Alipay、Taobao、Tmall etc, with high quality and robustness.</p></div>"
            }
          ],
          "footer": "<div class=\"markdown\"><p>Open-source MIT Licensed | Copyright © 2020-xylink</p></div>",
          "slugs": [
            {
              "depth": 1,
              "value": "xy-lodash",
              "heading": "xy-lodash"
            },
            {
              "depth": 2,
              "value": "Dev",
              "heading": "dev"
            },
            {
              "depth": 2,
              "value": "License",
              "heading": "license"
            },
            {
              "depth": 2,
              "value": "list",
              "heading": "list"
            }
          ],
          "locale": "zh-CN"
        },
        "title": "xy-lodash - React utils Library of Xylink"
      },
      {
        "path": "/pages/getting-started",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__pages__getting-started.en-US.md' */'../../../docs/pages/getting-started.en-US.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/pages/getting-started.en-US.md",
          "updatedTime": 1606204611262,
          "order": 1,
          "nav": {
            "title": "Guide",
            "order": 1,
            "path": "/pages"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "Getting Started",
              "heading": "getting-started"
            },
            {
              "depth": 2,
              "value": "First Example",
              "heading": "first-example"
            },
            {
              "depth": 3,
              "value": "1. Create one codesandbox",
              "heading": "1-create-one-codesandbox"
            },
            {
              "depth": 3,
              "value": "2. Using ahooks",
              "heading": "2-using-ahooks"
            },
            {
              "depth": 3,
              "value": "3. Explore more Hooks",
              "heading": "3-explore-more-hooks"
            },
            {
              "depth": 2,
              "value": "Import on demand",
              "heading": "import-on-demand"
            }
          ],
          "title": "Getting Started",
          "locale": "en-US"
        },
        "title": "Getting Started"
      },
      {
        "path": "/zh-CN/pages/getting-started",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__pages__getting-started.zh-CN.md' */'../../../docs/pages/getting-started.zh-CN.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/pages/getting-started.zh-CN.md",
          "updatedTime": 1606204597774,
          "order": 1,
          "nav": {
            "title": "指南",
            "order": 1,
            "path": "/zh-CN/pages"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "快速上手",
              "heading": "快速上手"
            },
            {
              "depth": 2,
              "value": "第一个例子",
              "heading": "第一个例子"
            },
            {
              "depth": 3,
              "value": "1. 创建一个 codesandbox",
              "heading": "1-创建一个-codesandbox"
            },
            {
              "depth": 3,
              "value": "2. 使用 ahooks",
              "heading": "2-使用-ahooks"
            },
            {
              "depth": 3,
              "value": "3. 探索更多 Hooks 用法",
              "heading": "3-探索更多-hooks-用法"
            },
            {
              "depth": 2,
              "value": "按需加载",
              "heading": "按需加载"
            }
          ],
          "title": "快速上手",
          "locale": "zh-CN"
        },
        "title": "快速上手"
      },
      {
        "path": "/pages",
        "meta": {
          "order": 1
        },
        "exact": true,
        "redirect": "/pages/getting-started"
      },
      {
        "path": "/zh-CN/pages",
        "meta": {
          "order": 1
        },
        "exact": true,
        "redirect": "/zh-CN/pages/getting-started"
      }
    ],
    "title": "xy-lodash"
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}


// ref: https://umijs.org/config/


// Instantiate the configuration with a new API
import { join } from 'path';
import slash from 'slash';

export default {
  treeShaking: true,
  publicPath:'./',
  history: 'hash',
  routes:[
    { path:'/', component:'./index.js' },
    { path:'/list', component:'./list/index.js',Routes: ['src/pages/routes/PrivateRoute.js'] }
  ],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: { webpackChunkName: true },
      title: 'umi_electron',
      dll: false,
      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    }],
  ],
  proxy: {
    "/api": {
      "target": "http://192.168.1.24:5000/mock/5",
      "changeOrigin": true,
      "pathRewrite": { "^/api" : "" }
    }
  },
  outputPath:'./app/render', // 更改输出目录
  externals(context, request, callback) {
    const isDev = process.env.NODE_ENV === 'development';
    let isExternal = false;
    const load = [
      'electron',
      'fs',
      'path',
      'os',
      'url',
      'child_process'
    ];
    if (load.includes(request)) {
      isExternal = `require("${request}")`;
    }
    const appDeps = Object.keys(require('./app/package').dependencies);
    if (appDeps.includes(request)) {
      const orininalPath = slash(join(__dirname, './app/node_modules', request));
      const requireAbsolute = `require('${orininalPath}')`;
      isExternal = isDev ? requireAbsolute : `require('${request}')`;
    }
    callback(null, isExternal);
  },
}

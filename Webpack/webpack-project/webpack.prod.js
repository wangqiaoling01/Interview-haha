/*
 * @Description: Description
 * @Version: 1.0
 * @Autor: WangQiaoLing
 * @Date: 2020-07-30 16:23:48
 * @LastEditors: WangQiaoLing
 * @LastEditTime: 2020-07-31 13:45:26
 */

const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
// 通用多入口打包
// const glob = require('glob')
// const setMPA = () => {
//   const entry = {}
//   const htmlWebpackPlugins = []
//   // 匹配src下的所有index.js
//   const entryFiles = glob.sync(path.join(__dirname, './src/*/index.js'))
//   Object.keys(entryFiles).map((index) => {
//     const entryFiles = entryFiles[index]
//     const match = entryFiles.match(/src\(.*)\/index\.js/)
//     const pageName = match && match[1]
//     console.log(pageName)
//     entryFile[pageName] = entryFile
//     htmlWebpackPlugins.push(
//       new HtmlWebpackPlugin({
//         template: path.resolve(__dirname, `src/${pageName}/index.html`), // 模板文件
//         filename: `${pageName}.html`, // 打包之后的文件名称
//         chunks: [pageName], // 包含哪些chunks
//         inject: true, // 将打包后的js/css自动注入到html中
//         minify: {
//           html5: true,
//           collapseInlineTagWhitespace: true,
//           preserveLineBreaks: false,
//           minifyCSS: true,
//           minifyJS: true,
//           removeComments: false,
//         },
//       })
//     )
//   })
//   return {
//     entry,
//     htmlWebpackPlugins,
//   }
// }
// const { entry, htmlWebpackPlugins } = setMPA()

module.exports = {
  entry: './src/index.js',
  // entry: entry, // 通用多入口打包
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]_[chunkhash:8].js', // js文件指纹
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [
                require('autoprefixer')({
                  // 向下兼容两个版本，使用率大于1%，ios7以上
                  browser: ['last 2 version', '>1%', 'ios 7'],
                }),
              ],
            },
          },
          {
            loader: 'px2rem-loader',
            options: {
              remUnit: 75, // 1rem = 75px
              remPrecision: 8, // px转换成rem时，小数点的位数
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/, // 图片
        use: {
          loader: 'file-loader',
          options: {
            name: '[name]_[hash:8][ext]', // 图片文件指纹
          },
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/, // 字体
        use: {
          loader: 'file-loader',
          options: {
            name: '[name]_[hash:8][ext]',
          },
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name]_[contenthash:8].css',
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano'),
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'), // 模板文件
      filename: 'index.html', // 打包之后的文件名称
      chunks: ['index', 'vue_vendors'], // 包含哪些chunks
      inject: true, // 将打包后的js/css自动注入到html中
      minify: {
        html5: true,
        collapseInlineTagWhitespace: true,
        preserveLineBreaks: false,
        minifyCSS: true,
        minifyJS: true,
        removeComments: false,
      },
    }),
    new CleanWebpackPlugin(),
    // new HtmlWebpackExternalsPlugin({
    //   externals: [
    //     {
    //       module: 'react',
    //       // 一般为CDN的地址
    //       entry:
    //         'https://cdn.bootcdn.net/ajax/libs/react/16.13.1/cjs/react.development.js',
    //       global: 'React',
    //     },
    //     {
    //       module: 'react-dom',
    //       entry:
    //         'https://cdn.bootcdn.net/ajax/libs/react-dom/16.13.1/cjs/react-dom-server.browser.development.js',
    //       global: 'ReactDOM',
    //     },
    //     {
    //       module: 'vue',
    //       entry: 'https://cdn.bootcdn.net/ajax/libs/vue/2.6.11/vue.min.js',
    //       global: 'Vue',
    //     },
    //   ],
    // }),
    new VueLoaderPlugin(),
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /vue/,
          name: 'vue_vendors',
          chunks: 'all',
        },
      },
      // chunks: 'async',
      // minSize: 30000, //抽离的公共包最小30000字节
      // maxSize: 0,
      // minChunks: 1, //最少使用次数，大于1时抽离公共部分
      // maxAsyncRequests: 30, // 最大请求数
      // maxInitialRequests: 30,
      // automaticNameDelimiter: '~',
      // enforceSizeThreshold: 50000,
    },
  },
  // .concat(htmlWebpackPlugins)
}

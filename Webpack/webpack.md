# webpack详解：

## 原理：

​	在 webpack 中，一切皆模块，而模块互相之间又有关联，并且对于非代码比如图片、字体依赖等也会加入到依赖图中。webpack 根据入口文件找到各种依赖，在打包构建时，webpack 将各种依赖添加到依赖图中，最终遍历完后生成打包之后的文件。

## 1. 为什么选择webpack？

- 社区活跃
- 配置灵活和插件化扩展
- 官方更新迭代速度快（官方维护频率高）

## 2. webpack配置文件

- 默认是：webpack.config.js

- 可以通过 webpack --config 指定文件
- 配置文件组成：
  - entry：入口，默认为./src/index.js
  - output：输出，默认为./dist/main/js
  - mode
  - loader配置：module下的rules数组中
  - plugins：插件配置

## 3. 准备 -- 安装 nvm

- nvm是node的版本控制工具，windows通过https://github.com/coreybutler/nvm-windows/releases进行下载

- 安装指定版本：

  ```bash
  nvm install v12.18.3
  ```

  

- 使用node版本：

  ```bash
  nvm use 12.18.3
  ```

  

- node -v 和 npm -v 查看是否安装成功

## 3.现在开始

### 3.1初体验

- 创建工程文件：

  ```
  mkdir webpack-project
  ```

- 初始化：

  ```bash
  npm init -y
  ```

- 在工程目录下，安装webpack

  ```bash
  npm install webpack webpack-cli --save-dev
  ```

- 在src/index.js中写点东西：

  ```javascript
  import { helloworld } from './helloworld'
  document.write(helloworld())
  ```

  helloworld.js中：

  ```javascript
  export function helloworld() {
    return 'helloworld'
  }
  ```

- 配置脚本运行构建：在package.json文件中的“scripts"下添加如下

  ```
  "build": "webpack --config"
  ```

  其原理是：**在node_module/.bin下创建软链接**

- 结果：创建一个html页面，显示 helloworld

### 3.2 基础用法

#### 3.2.1 entry

> 在 webpack 中，一切皆模块，而模块互相之间又有关联，并且对于非代码比如图片、字体依赖等也会加入到依赖图中。webpack 根据入口文件找到各种依赖，在打包构建时，webpack 将各种依赖添加到依赖图中，最终遍历完后生成打包之后的文件。

- 单入口：一个入口文件，适合项目中单页面应用

  ```javascript
  entry: './path/to/my/entry/file.js'
  ```

  

- 多入口：多个入口文件，适合多页面应用，以key-value的形式进行定义

  ```javascript
  entry:{
  	app1:'./src/app1.js',
  	app2:'./src/app2.js'
  }
  ```

  

#### 3.2.2 output

> output配置告诉webpack如何将编译后的文件输出到磁盘，输出的路径以及文件名称

```javascript
output: {
	filename: '文件名称.js',
	path: '文件目录.js'
}
```

对于多入口文件打包时，使用占位符，打包后会有对应的app1.bundle.js和app2.bundle.js

```javascript
entry:{
	app1:'./src/app1.js',
	app2:'./src/app2.js'
}
output: {
	filename: '[name].bundle.js',
	path: '文件目录.js'
}
```

#### 3.2.3 loaders

> webpack原声只支持js和json两种文件类型，通过loaders去支持其他文件类型并且把他们转化成有效的文件模块，并且可以添加到依赖图中。
>
> loaders本身是一个函数，接收源文件作为参数，返回转换的结果。

- babel-loader：转换ES6+的新特性的语法
- css-loader：支持.css文件的加载和解析
- less-loader：将less转换成css
- ts-loader：将TS转换成JS
- file-loader：进行图片、字体等的打包
- raw-loader：将文件以字符串的形式导入
- thread-loader：多进行打包JS和CSS

loaders的具体配置写在配置文件中的module下的rules数组中，每个loader是一个对象，使用test指定匹配规则，use指定使用的loader的名称

#### 3.2.4 plugins

> plugins作用域bundle文件的优化，资源管理和环境变量的注入，作用于整个构建过程。

- commonsChunkPlugin：将chunks相同的模块代码提取成公共的js
- CleanWebpackPlugin：清理构建目录
- ExtractTextWebpackPlugin：将css从bundle文件中提取成一个独立的css文件
- CopyWebpackPlugin：将文件或者文件夹拷贝到构建的输出目录
- HtmlWebpackPlugin：创建html文件去承载输出的bundle
- UglifyjsWebpackPlugin：压缩js
- ZipWebpackPlugin：将打包出的资源生活蹭一个zip包

具体写在plugins数组中

#### 3.2.5 mode

> mode用来指定当前的构建环境是：production、development还是none。设置mode可以使用文本pack内置的函数，默认设置为production

- development：设置process.env.NODE_ENV=‘development’
- production：设置process.env.NODE_ENV=‘production’，会开启一些优化打包代码的插件。
- none：不开启任何优化选项

#### 3.2.6 解析ES6+和jsx

首先安装依赖：

```bash
npm install @babel/core @babel/preset-env babel-loader --save-dev
```

使用babel-loader：

```javascript
{
	test: /\.js$/,
	use: 'babel-loader'
}
```

而babel-loader是依赖于babel的，所以在babel的配置文件.babel中配置如下：

```javascript
{
	"presets":[
		"@babel/preset-env"
	],
}
```

- 解析 jsx 时：
  - 首先安装依赖：react、react-dom、@babel/preset-react
- 在.babelrc中添加："@babel/preset-react"

3.2.7 解析css、less、sass

##### 解析css

- 首先安装依赖：css-loader、style-loader

  ```bash
  npm install style-loader css-loader --save-dev
  ```

- 在webpack的配置文件中的rules中添加：

  ```javascript
  {
  	test:/\.css$/,
  	use:['style-loader', 'css-loader'] // 解析从后往前，注意顺序！
  }
  ```

- css-loader用于加载.css文件，并且转换成commonjs对象

- style-loader将样式通过style标签插入到head中

##### 解析less、sass

- 首先安装依赖：less-loader、sass-loader

  ```bash
  npm install less less-loader sass sass-loader --save-dev
  ```

- 在webpack的配置文件中的rules中添加：

  ```bash
  {
  	test:/\.less$/,
  	use:['style-loader', 'css-loader','less-loader'] // 解析从后往前，注意顺序！
  },
  {
  	test:/\.sass$/,
  	use:['style-loader', 'css-loader','sass-loader'] // 解析从后往前，注意顺序！
  }
  ```

#### 3.2.8 解析图片、字体资源

- 首先安装依赖file-loader

  ```bash
  npm install file-loader --save-dev
  ```

- 在 webpack 的配置文件中的rules中添加：

  ```bash
  {	
  	test: /\.(png|jpg|jpeg|gif)$/,// 图片
  	use: 'file-loader'
  },
  {
  	test:/\.(woff|woff2|eot|ttf|otf)$/, // 字体
  	use: 'file-loader'
  }
  ```

- **url-loader**：也可以处理图片和字体，可以设置较小资源自动转换为base64

  - 首先安装依赖:

    ```bash
    npm install url-loader --save-dev
    ```

  - 在 webpack 的配置文件中的rules中添加：

    ```bash
    {	
    	test: /\.(png|jpg|jpeg|gif)$/,// 图片
    	use: [
    		{
    		loader: 'url-loader',
    		options: {
    				limit: 1024 * 10 // 小于10M的图片使用base64编码
    			}
    		}
    	]
    }
    ```

#### 3.2.9 文件监听

> 文件监听是指在发现源码文件发生变化时，自动重新构建出新的输出文件
>
> 轮询判断文件的最后编辑时间是否放生变化，某个文件发生了变化，并不会立即告诉监听者，而是先缓存起来，等aggregateTimeout再去执行。默认每秒询问1000次。

webpack 开启监听模式，有两种方式：

- 启动 webpack 命令时，带上 --watch 参数
  - 在scripts中添加 "watch": "webpack --watch"
  - 每次需要手动刷新浏览器
- 在配置 webpack.config.js中设置 watch: true

#### 3.2.10 热更新

> webpack-dev-server使得文件更新时，可以自动构建，并且不刷新浏览器；webpack-dev-server不输出文件，而是放在内存中，所以比watch快，因为没有文件IO操作。

- 安装依赖：

  ```bash
  npm install webpack-dev-server --save-dev
  ```

- 在scripts中添加：

  ```bash
  "dev": "webpack-dev-server --open"
  ```

  --open 是指自动打开浏览器

- 由于热更新是在开发环境中使用，所有对应的mode为development

  ```javascript
  const webpack = require('webpack')
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    contentBase: './dist',
    hot: true,
  }
  ```

#### 3.2.11 文件指纹

> 文件指纹：打包后输出的文件名的后缀。可以做文件的版本管理，对于没有改变的文件，可以读取缓存中的资源。

- 文件指纹的生成：
  - Hash：和整个项目的构建有关，只要项目文件有修改，整个项目构建的hash值就会改
  - Chunkhash：和webpack打包的chunk有关，不同的entry会生成不同的chunkhash值
  - Contenthash：根据文件内容来定义hash，文件内容不变，则contenthash不变

- 具体使用：

  ```javascript
  output:{
  	filename:'[name].[chunkhash:8].js', // js文件的文件指纹
      path:__dirname + '/dist'
  },
  module:{
      rules:[
          {
              test:/\.css$/,
              use: [MiniCssExtractPlugin.loader, 'css-loader'],
          }
      ]
  }
  plugins:[
      // 抽取 css 文件
      new MiniCssExtractPlugin({
          filename: '[name][contenthash:8].css' // css文件的文件指纹
      })
  ],
  module:{
      rules:[
          {	
              test: /\.(png|jpg|jpeg|gif)$/,// 图片
              use: [
                  loader: 'file-loader',
                  options:{
                  	name: 'img/[name][hash:8].[ext]' // ext是指资源后缀名
                  }
              ]
          }
      ]
  }
  ```

  

#### 3.2.12 文件压缩

- 压缩HTML文件：

  - 安装 html-webpack-plugin

  - 配置：

    ```javascript
    const HtmlWebpackPlugin = require('html-webpack-plugin')
    new HtmlWebpackPlugin({
    	template: path.resolve(__dirname, 'src/index.html'), // 模板文件
    	filename: 'index.html', // 打包之后的文件名称
    	chunks: ['index'], // 包含哪些chunks
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
    ```

- 压缩css文件：

  - 安装 optimize-css-assets-webpack-plugin 和 cssnano

  - 配置：

    ```javascript
    const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
    plugins: [
        new OptimizeCssAssetsPlugin({
          assetNameRegExp: /\.css$/g,
          cssProcessor: require('cssnano')
        })
    ],
    ```

### 3.3 进阶用法

#### 3.3.1 自动清理构建目录产物

> 每次构建的时候不会清理目录，造成构建的输出目录output文件越来越多；那么避免构建前每次都手动删除dist，使用clean-webpack-plugin，默认会删除output指定的输出目录

- 安装依赖：

  ```bash
  npm i clean-webpack-plugin -D
  ```

- 配置：

  ```javascript
  const {CleanWebpackPlugin} = require('clean-webpack-plugin')
  new CleanWebpackPlugin() // 添加到plugins中
  ```

  

#### 3.3.2 PostCSS 插件 autoprefixer 自动补齐 CSS3 前缀

> 使用 autoprefixer 插件自动补齐 css3 的前缀

- 安装依赖：

  ```
  npm i postcss-loader autoprefixer -D
  ```

- 配置：

  ```javascript
  {
  	test: /\.less$/,
  	use: [
  		'style-loader',
  		'css-loader',
  		'less-loader',s
  		{
  			loader:'postcss-loader',
  			options:{
  				plugins:() => [
  					require('autoprefixer')({
                          // 向下兼容两个版本，使用率大于1%，ios7以上
  						browsers:['last 2 version', '>1%', 'ios 7']
  					})
  				]
  			}
  		}
  	]
  }
  ```

#### 3.3.3 移动端CSS px自动转换成rem

> 浏览器的分辨率：对于不同的机型，分辨率不一样，可以使用css的媒体查询实现响应式布局，但是需要写多套适配样式的代码，效率低；而rem的出现可以改善，rem是相对于根元素的大小，就可以根据机型去控制大小，方便且高效，在webpack中，使用px2rem-loader在页面渲染时计算根元素的font-size的值。

- 安装依赖

  ```bash
  npm i px2rem-loader -D
  npm i lib-flexible -S
  ```

- 配置

  ```javascript
  {
  	test: /\.less$/,
  	use: [
  		'style-loader',
  		'css-loader',
  		'less-loader',
  		{
              loader: 'px2rem-loader',
              options: {
                remUnit: 75, // 1rem = 75px
                remPrecision: 8, // px转换成rem时，小数点的位数
              },
           },
  	]
  }
  ```

  

#### 3.3.4 静态资源内联

> 从代码层面：页面框架的初始化脚本、上报相关打点、css内联避免页面闪动；从请求层面：减少HTTP网络请求数量，比如小图片或者字体内联(url-loader)

- 使用 raw-loader 进行HTML和JS的内联

  - 安装 raw-loader 

  - 使用：

    ```html
    ${require('raw-loader!./xxx.html')}
    <script>${require('raw-loader!babel-loader../../node_modules/xxx/xxx.js')}</script>
    ```

    

#### 3.3.5 多页面打包通用方案

> 利用glob.sync动态获取entry和设置html-webpack-plugin的数量

- 安装依赖

  ```bash
  npm i glob -D
  ```

  

- 配置

  ```javascript
  const glob = require('glob')
  const setMPA = () => {
  	const entry = {}
  	const htmlWebpackPlugins = []
      // 匹配src下的所有index.js
  	const entryFiles = glob.sync(path.join(__dirname, './src/*/index.js'))
      Object.keys(entryFiles).map((index) => {
          const entryFiles = entryFiles[index]
          const match = entryFiles.match(/src\(.*)\/index\.js/)
          const pageName = match && match[1]
          entryFile[pageName] = entryFile
          htmlWebpackPlugins.push(
          	new HtmlWebpackPlugin({
                template: path.resolve(__dirname, `src/${pageName}/index.html`), // 模板文件
                filename: `${pageName}.html`, // 打包之后的文件名称
                chunks: [pageName], // 包含哪些chunks
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
          )
      })
  	return {
          entry,
          htmlWebpackPlugins
      }
  }
  const { entry, htmlWebpackPlugins } = setMPA()
  entry: entry,
  plugins:[
      //......
  ].concat(htmlWebpackPlugins)
  ```

  

#### 3.3.6 使用sourcemap

- sourcemap关键字：
  - eval
  - inline

#### 3.3.7 提取公共资源

> 在项目中，使用的基础库相同，页面之间还会引用相同的模块，如果将它们抽离出来，单独打包，效率较高。

- 使用html-webpack-externals-plugin将react、react-dom、vue通过CDN引入，不打入bundle中

  - 安装依赖：

    ```bash
    npm i html-webpack-externals-plugin -D
    ```

  - 配置，：

    ```javascript
    const VueLoaderPlugin = require('vue-loader/lib/plugin')
    // 在plugins中添加：
    new VueLoaderPlugin(),
    new HtmlWebpackExternalsPlugin({
    	externals: [
    		{
            	module: 'react',
              	// 一般为CDN的地址
              	entry:
                'https://cdn.bootcdn.net/ajax/libs/react/16.13.1/cjs/react.development.js',
              	global: 'React',
            },
            {
            	module: 'react-dom',
              	entry:
                'https://cdn.bootcdn.net/ajax/libs/react-dom/16.13.1/cjs/react-dom-server.browser.development.js',
              	global: 'ReactDOM',
            },
            {
    			module: 'vue',
              	entry: 'https://cdn.bootcdn.net/ajax/libs/vue/2.6.11/vue.min.js',
              	global: 'Vue',
            },
    	],
    })
    ```

  - 在HTML中引入：

    ```html
    <script src="https://cdn.bootcdn.net/ajax/libs/react/16.13.1/cjs/react.development.js"></script>
    <script src="https://cdn.bootcdn.net/ajax/libs/react-dom/16.13.1/cjs/react-dom-server.browser.development.js"></script>
    <script src="https://cdn.bootcdn.net/ajax/libs/vue/2.6.11/vue.min.js"></script>
    ```

- 在webpack 4中使用splitChunksPlugin进行公共脚本的分离

  - 安装依赖：

  ```
  npm i html-webpack-externals-plugin -D
  ```

  - 配置：

  ```javascript
  // 在HtmlWebpackPlugin中的chunks字段中添加vue_vendors
  // 在optimization字段下补充
  optimization: {
      splitChunks: {
        cacheGroups: {
          commons: {
            test: /vue/, // 匹配 vue
            name: 'vue_vendors', // 打包之后的文件名称
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
  ```

  - chunks参数说明：
    - async：异步引入的库进行分离，默认。
    - initial：同步引入的库进行分离。
    - all：所有引入的库进行分离，推荐。

  

#### 3.3.8 Tree Shaking (摇树优化)

> 一个模块中可能会有多个方法，只要其中某个方法被用到了，则整个文件都会被打包到bundle中去，Tree Shaking就是只将用到的方法打入bundle，没用用到的方法在Uglify阶段被擦除调。此方法在webpack中默认支持，在.babelrc中设置modules : false即可，在mode为production的情况下默认开启。但是必须是ES6语法，CJS的方法不支持。

> DCE(Elimination)：代码不会被执行，不可到达，代码执行的结果不会被用到。代码只会影响死变量（只写不读）

##### Tree Shaking 的原理：利用ES6模块的特点，对模块进行静态的分析

- 只能作为模块顶层的语句出现
- import的模块只能是字符串常量
- import building是immutable的
- **代码擦除**：uglify阶段删除无用的代码

#### 3.3.9 Scope Hoisting使用和原理分析

> 构建后的代码中存在大量闭包代码，这样会导致大量函数闭包包裹代码，导致代码变多；运行代码时，创建的函数作用域变多，内存开销变大。

**Scope Hoisting的原理：**将所有模块的代码按照引用顺序放在一个函数作用域里，然后适当的命名一些变量以防止变量名冲突。通过Scope Hoisting可以减少函数声明代码和内存开销。

- webpack mode为production时默认开启。
- 必须是ES6语法，CJS不支持。

使用，在plugins中添加：

```javascript
new webpack.optimize.ModuleConcatenationPlugin()
```

#### 3.3.10 代码分割

> 对于大的Web应用来讲，将所有的代码放在一个文件中显然不够有效，特别是当某些代码是在某些特殊的时候才会被使用到。webpack有一个功能就是将代码分割成chunks，当代码运行到需要他们的时候再动态地进行加载。

- 使用场景：
  - 抽离相同的代码到一个共享块
  - 脚本懒加载，是的初始下载的代码更小

- 如何动态import？

  - 安装babel插件：

    ```bash
    npm install @babel/plugin-syntax-dynamic-import --save-dev
    ```

  - 在babelrc的plugins中添加：

    ```javascript
    "@babel/plugin-syntax-dynamic-import"
    ```

    

- 使用
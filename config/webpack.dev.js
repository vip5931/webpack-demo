const os = require('os')
const path = require('path')
const threads = os.cpus().length
const ESLintPlugin = require('eslint-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
// const TerserWebpackPlugin = require('terser-webpack-plugin')

function getStyleLoader(pre) {
  return [
    MiniCssExtractPlugin.loader, // 创建style标签，将js中的样式资源插入进行，添加到head中生效
    'css-loader', // 将css文件变成commonjs模块加载到js中，里面内容是样式字符串
    {
      loader: 'postcss-loader',
      options: {
        postcssOptions: {
          plugins: ['postcss-preset-env'],
        },
      },
    },
    pre,
  ].filter(Boolean)
}

// 配置文件
module.exports = {
  // 入口
  entry: './src/main.js',
  // 出口
  output: {
    // 所有文件输出路径
    // 绝对路径
    // 开发模式在内存中编译 不需要输出
    // path: path.resolve(__dirname, '../dist'),
    path: undefined,
    filename: 'static/js/main.js',
    // 不需要输出所以不需要清除
    // clean: true,
  },
  // 模块
  module: {
    rules: [
      {
        // 每个文件只能被一个loader匹配
        oneOf: [
          {
            test: /\.css$/,
            // use数组中loader执行顺序：从右到左，从下到上，依次执行
            use: getStyleLoader(),
          },
          {
            test: /\.less$/,
            use: getStyleLoader('less-loader'),
          },
          {
            test: /\.s[ac]ss$/,
            use: getStyleLoader('sass-loader'),
          },
          {
            test: /\.styl$/,
            use: getStyleLoader('stylus-loader'),
          },
          // 打包其他资源
          {
            test: /\.(png|jpe?g|gif|webp|svg)/,
            type: 'asset',
            parser: {
              dataUrlCondition: {
                maxSize: 10 * 1024, // 10kb
              },
            },
            // 配置图片输出路径
            // hash代表文件名
            // ext 扩展名
            // query 查询字符串
            generator: {
              filename: 'static/images/[name].[hash:10][ext][query]', // hash:10 代表hash值只取10位
            },
          },
          {
            test: /\.(ttf|woff2?)/,
            type: 'asset/resource',
            // 配置图片输出路径
            // hash代表文件名
            // ext 扩展名
            // query 查询字符串
            generator: {
              filename: 'static/media/[name].[hash:10][ext][query]', // hash:10 代表hash值只取10位
            },
          },
          {
            test: /\.js$/,
            include: path.resolve(__dirname, '../src'),
            use: [
              // 开启多进程打包
              {
                loader: 'thread-loader',
                options: {
                  // 一般是机器的核数-1
                  workers: threads - 1,
                },
              },
              {
                loader: 'babel-loader',
                options: {
                  cacheDirectory: true, // 开启缓存
                  cacheCompression: false, // 关闭压缩
                  plugins: ['@babel/plugin-transform-runtime'], // 减少代码体积
                },
              },
            ],
          },
        ],
      },
    ],
  },
  // 插件
  plugins: [
    new ESLintPlugin({
      // 检测哪些文件
      context: path.resolve(__dirname, '../src'),
      // 不检测的文件
      exclude: 'node_modules',
      // 是否缓存
      cache: true,
      // 缓存位置
      cacheLocation: path.resolve(__dirname, '../node_modules/.cache/.eslintcache'),
      // 多进程打包
      threads: threads - 1,
    }),
    new HtmlWebpackPlugin({
      // 模板：将来会根据这个模板生成一个新的html文件
      // 新的html文件特点：1.结构和模板一样 2.自动引入打包输出的所有资源
      template: path.resolve(__dirname, '../public/index.html'),
    }),
    new MiniCssExtractPlugin({
      // 对输出的css文件进行重命名
      filename: 'static/css/main.css',
    }),
  ],
  // 开发服务器
  devServer: {
    // 服务器的域名
    host: 'localhost',
    // 端口号
    port: 5931,
    // 自动打开浏览器
    open: true,
    // 热更新
    hot: true,
  },
  // 模式
  mode: 'development',
  devtool: 'cheap-module-source-map',
}

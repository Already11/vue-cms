const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');



module.exports = {
    // entry : path.join(__dirname,'./src/index.js'),
    // output : {
    //     path : path.join(__dirname,'./dist'),
    //     // filename : 'main.js'
    // },
    plugins: [
        new htmlWebpackPlugin({     //打包html文件
            template: path.join(__dirname, './src/index.html'),
            filename: 'index.html'
        }),
        new VueLoaderPlugin(),
    ],



    module: { //webpack默认只处理js文件 其它需要加载器
        rules: [{
                test: /\.css$/,
                loader: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                loader: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test:  /\.(woff|woff2|svg|ttf|eot|jpg)$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'fonts/[name].[hash:8].[ext]'
                }
            }


        ]
    },
    resolve: {
        // alias: {
        //     // 'vue$':'vue/dist/vue.js'
        // }
        // extensions: ['.js', '.vue', '.json'],
        // alias: {
        //     'vue$': 'vue/dist/vue.esm.js',
        //     '@': resolve('src'),
        //     'bootstrap': resolve('src/assets/bootstrap')
        // }
        // extensions: ['.js', '.vue', '.json'],
        // alias: {
        //     'vue$': 'vue/dist/vue.esm.js',
        //     '@': resolve('src'),
        //     'jquery': 'jquery'
        // }
    }

}
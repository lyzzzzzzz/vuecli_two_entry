module.exports = {
    publicPath: process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'uat' ?
        './' : process.env.NODE_ENV === 'test' ? './' : '/',
    // devServer: {
    //     proxy: {
    //         '/api': {
    //             target: 'http://192.168.30.141:6800', // 调用的接口域名
    //             changeOrigin: true, // 是否跨域
    //             pathRewrite: {
    //                 '/api': ''
    //             }
    //         },
    //     }
    // },
    lintOnSave: false,
    productionSourceMap: false,
    pages: {
        backEnd: {
            entry: 'src/views/back-end/main.js',
            template: 'plugins/index.html',
            filename: 'backEnd.html',
            title: 'backEnd',
            chunks: ['chunk-vendors', 'chunk-common', 'backEnd'],
        },
        frontEnd: {
            entry: 'src/views/front_end/main.js',
            template: 'plugins/index.html',
            filename: 'frontEnd.html',
            title: 'frontEnd',
            chunks: ['chunk-vendors', 'chunk-common', 'frontEnd'],
        }
    }
}
module.exports = {
    publicPath: './',
    //配置代理
    devServer: {
        proxy: {
            '/api': {
                target: 'http://www.baidu.com',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '/'
                }
            },
        },
    },
}
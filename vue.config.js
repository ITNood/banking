module.exports = {
    publicPath: './',
    //配置代理
    devServer: {
        proxy: {
            '/api': {
                target: 'http://www.greenfinancial.org/',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            },
        },
    },
}
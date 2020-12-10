module.exports = {
    publicPath: './',
    //配置代理
    devServer: {
        proxy: {
            '/api': {
                target: 'http://www.greenfinancial.org/index.php/',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            },
        },
    },
}
module.exports = {
    devServer: {
        port: "8080",
        host: "127.0.0.1",
        open: true,
        proxy: {
            "/pinmaoServerr": {
                target: "http://127.0.0.1:8849/pinmaoServerr",
                changeOrigin: true,
                pathRewrite: {
                    "^/pinmaoServerr": ""
                }
            },
            "/video": {
                target: "http://127.0.0.1:8849/springvideo",
                changeOrigin: true,
                pathRewrite: {
                    "^/video": ""
                }
            },
            "/pinmao": {
                target: "http://127.0.0.1:8081/pinmao",
                changeOrigin: true,
                pathRewrite: {
                    "^/pinmao": ""
                }
            }
        }
    }
}
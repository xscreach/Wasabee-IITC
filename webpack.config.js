const path = require("path");
const outputPath = path.join(__dirname, "dist");
const webpack = require("webpack");

module.exports = function (env) {
    var config = {
        mode: "production",
        entry: {
            static: "./src/code/static.js"
        },
        output: {
            path: outputPath,
            filename: "[name]-bundle.js",
        },
        module: {
            rules: [
                {
                    test: /\.(png|gif)$/,
                    use: "url-loader"
                },
                {
                    test: /\.css$/,
                    use: ["to-string-loader", "css-loader"]
                },
                {
                    test: /\.html$/,
                    use: ["to-string-loader", "html-loader"]
                },
                // {
                //   test:  /\.ts$/,
                //   use: [
                //     "babel-loader",
                //     "awesome-typescript-loader"
                //   ]
                // },
            ]
        }
    };
    return config;
}

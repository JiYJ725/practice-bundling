const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
    target: ["web", "es5"],
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "docs"),
        filename: "[fullhash].bundle.js",
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
                exclude: /node_modules/,
            },
            {
                test: /\.jsx?/, // 대상 설정 정규식
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", ["@babel/preset-react", { runtime: "automatic" }]],
                    },
                },
                exclude: /(node_modules)/,
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "public", "index.html"),
        }),
        new MiniCssExtractPlugin(),
    ],
    optimization: {
        minimizer: [new CssMinimizerPlugin()],
    },
};

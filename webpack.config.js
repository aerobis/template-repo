import path from "node:path";
import HtmlWebpackPlugin from "html-webpack-plugin";

export default{
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(import.meta.dirname, "dist"),
        publicPath: "/", // Change to "/repo-name/" if deploying to a project page
        clean: true,
    },
    devtool: "eval-source-map",
    devServer: {
        watchFiles: ["./src/template.html"],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/template.html",
        }),
    ],
    module:{
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.html$/i,
                use: ["html-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                use: "asset/resource",
            },
            {
                test: /\.(ttf|otf|woff|woff2)$/i,
                use: "asset/resource",
            }
        ],
    },
};
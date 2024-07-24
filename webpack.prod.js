const webpack = require("webpack");
const baseConfig = require("./webpack.common");
const { merge } = require("webpack-merge");


module.exports = merge(baseConfig,{
    mode: "production",
    plugins: [
        new webpack.DefinePlugin({
            'process.env.CONTRACT_ADDRESS': JSON.stringify(process.env.CONTRACT_ADDRESS),
            'process.env.DEBUG': JSON.stringify(process.env.DEBUG),
        }),
    ],
});
import HTMLWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import { BuildOptions } from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import Dotenv from 'dotenv-webpack';
const SitemapPlugin = require('sitemap-webpack-plugin').default;

export function buildPlugins({paths}: BuildOptions): webpack.WebpackPluginInstance[] {
    const projectPaths = [
        '/',
        '/faq/',
        '/locations/',
        '/contacts/',
    ];

    return [
        new Dotenv({
            systemvars: true
        }),
        new HTMLWebpackPlugin({
            template: paths.html,
            favicon: paths.favicon
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
        new SitemapPlugin({
            base: 'https://intensiveschool.com.ua',
            paths: projectPaths,
            options: {
                filename: 'sitemap.xml',
                skipgzip: true
            }
        })
    ]
}
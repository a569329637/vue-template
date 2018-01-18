'use strict';
const env = require('../config/prod.env');
const config = require('../config');
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

function exportEntry(environment) {
    const exportHtml = environment === env ? config.build.exportHtml : config.dev.exportHtml;
    let entry = {};
    for (let i = 0; i < exportHtml.length; i++) {
      const name = exportHtml[i].name;
      entry[name] = './src/views/' + name + '/main.js';
    }
    // console.log(entry);
    return entry;
}

function exportRewrites() {
  const exportHtml = config.dev.exportHtml;
    let rewrites = [];
    for (let i = 0; i < exportHtml.length; i++) {
        const name = exportHtml[i].name;
        const from = exportHtml[i].from;
        rewrites.push({ form: new RegExp(from), to: path.posix.join(config.dev.assetsPublicPath, name + '.html') });
    }
    // console.log(rewrites);
    return rewrites;
}

function exportHtmlPlugins(environment) {
  const exportHtml = environment === env ? config.build.exportHtml : config.dev.exportHtml;
    let htmlWebpackPlugins = [];
    for (let i = 0; i < exportHtml.length; i++) {
        const name = exportHtml[i].name;
        const title = exportHtml[i].title;
        if (environment === env) {
            htmlWebpackPlugins.push(
                new HtmlWebpackPlugin({
                    filename: name + '.html',
                    template: 'index.html',
                    title: title,
                    inject: true,
                    cache : true,
                    minify: {
                        removeComments: true,
                        collapseWhitespace: true,
                        removeAttributeQuotes: true
                        // more options:
                        // https://github.com/kangax/html-minifier#options-quick-reference
                    },
                    chunks: ['manifest', 'vendor', 'app', name],
                    chunksSortMode: 'dependency',
                })
            );
        } else {
            htmlWebpackPlugins.push(
                new HtmlWebpackPlugin({
                    filename: name + '.html',
                    template: 'index.html',
                    title: title,
                    inject: true,
                    chunks: [name],
                })
            );
        }
    }
    // console.log(htmlWebpackPlugins);
    return htmlWebpackPlugins;
}

module.exports = { exportEntry, exportRewrites, exportHtmlPlugins };


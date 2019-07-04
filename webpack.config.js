const path = require('path');

module.exports = {
    mode : 'development',
    entry: {
        home: './src/index.js',
        details: './src/js/details.js',
        job_entry:'./src/js/job-entry.js'
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'js/[name].main.js',
        publicPath:'/assets/'
    },
    devServer: {
       port:1234,
       contentBase: path.join(__dirname, 'dist')
    },
    module : {
        rules: [
            {
                test: /\.(scss)$/,
                use: [
                  {
                    // Adds CSS to the DOM by injecting a `<style>` tag
                    loader: 'style-loader'
                  },
                  {
                    // Interprets `@import` and `url()` like `import/require()` and will resolve them
                    loader: 'css-loader'
                  },
                  {
                    // Loader for webpack to process CSS with PostCSS
                    loader: 'postcss-loader',
                    options: {
                      plugins: function () {
                        return [
                          require('autoprefixer')
                        ];
                      }
                    }
                  },
                  {
                    // Loads a SASS/SCSS file and compiles it to CSS
                    loader: 'sass-loader'
                  }
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
              test: /\.(png|svg|jpg|gif)$/,
              use: [
                'file-loader'
              ]
            }
        ]
    }
}
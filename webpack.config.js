module.exports = {
  entry: [
    './src/index.js' //entry point for the client side application
  ],
  module: {
    loaders: [
      {
        //for files edning in '.js'
        test: /\.js$/,
        exclude: /node_modules/, //don't build modules from libs, use them as they are
        loaders: [
          'react-hot', //managed hot-reloading
          'babel', //transpiles into plain JS, enables ES6 features
          'eslint' //syntax and style checking
        ]
      },
      {
        //for files ending in '.scss'
        test: /\.scss$/,
        loaders: [
          //register the gerenal style loader
          'style',
          //couple it with css loader to resolve :local() selectors in CSS
          'css?sourceMap&localIdentName=[path][name]---[local]---[hash:base64:5]',
          //add SCSS compilation
          'sass'
        ]
      }
    ]
  },
  devtool: [
    'source-map' //provide source maps for browser's dev tools
  ],
  output: {
    path: __dirname + 'dist', //where to put the build results
    publicPath: '/', //url where the browser will find the build results
    filename: 'bundle.js' //name for the JS bundle
  },
  devServer: {
    contentBase: './dist', //from where to deliver files
    port: 8000, //port to listen on
    proxy: {
      //pass all requests starting with '/search' to the itunes search
      '/search*': {
        target: 'https://itunes.apple.com/',
        changeOrigin: true, //needed to enable a request to another origin
      }
    }
  }
};

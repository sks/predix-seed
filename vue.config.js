const path = require('path')

function resolve(directory) {
  return path.resolve(__dirname, directory)
}

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        includePaths: ['public/bower_components']
      }
    }
  },
  chainWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      config
        .plugin('copy')
        .tap(args => {
          return [[{ 
            from: resolve('public/bower_components/webcomponentsjs/**.js'),
            flatten: true,
            to: resolve('dist/bower_components/webcomponentsjs/')
        }]]
      })
    }
  }
};

module.exports = {
  configureWebpack: {
    resolve: {
      extensions: ['vue', 'ts', 'tsx', 'js', 'less', 'css']
    }
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: []
    }
  }
}

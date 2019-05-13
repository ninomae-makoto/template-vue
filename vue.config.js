module.exports = {
  // https://cli.vuejs.org/config/
  chainWebpack: config => {
    // ライブラリの外部化 htmlで読み込む必要がある
    config.externals({
      "axios": "axios",
      "vue": "Vue",
      'element-ui': 'ElementUI'
    })
  },
}

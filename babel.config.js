const plugins = [
  [
    'import',
    {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    },
    'vant'
  ]
]
// 去除 console.log
if (process.env.NODE_ENV==='production') {
  plugins.push('transform-remove-console')
}

module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  plugins
}

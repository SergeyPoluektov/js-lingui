// Babel builder doesn't generate CommonJS, but ES modules.
// Rollup, however, needs `modules: false, babel modules: true`
module.exports = function(options) {
  const presets = [
    [
      "@babel/preset-env",
      {
        targets: {
          node: 16,
          browsers: "> 1%, last 2 versions"
        },
        modules: options.modules === false ? false : "commonjs"
      }
    ],
    "@babel/preset-typescript",
    "@babel/preset-react"
  ]

  const plugins = [
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-proposal-export-default-from",
    "@babel/plugin-transform-runtime"
  ]

  return {
    presets,
    plugins
  }
}

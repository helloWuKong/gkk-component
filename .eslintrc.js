module.exports = {
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
    ecmaVersion: 6
  },
  env: {
    browser: true
  },
  extends: [
    'standard',
    'plugin:vue/recommended'
  ]
}

import pluginQuery from '@tanstack/eslint-plugin-query'
import nimbusCleanPlugin from 'eslint-plugin-nimbus-clean'
import globals from 'globals'

const config = [
  { ignores: ['dist', '**/*.generated.ts'] },
  ...nimbusCleanPlugin.configs.flat.recommended,
  ...pluginQuery.configs['flat/recommended'],
  {
    files: ['**/*.{js,jsx,ts,tsx,cjs}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: { ...globals.browser, ...globals.node, ...globals.commonjs },
      parserOptions: {
        ecmaFeatures: { jsx: true },
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
  },
]

export default config

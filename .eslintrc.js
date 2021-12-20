module.exports = {
  extends: [
    'airbnb',
    'prettier',
    'plugin:compat/recommended',
    'plugin:jest/recommended',
    'plugin:react/recommended',
    'plugin:import/typescript',
    'plugin:markdown/recommended',
  ],
  env: {
    browser: true,
    node: true,
    jasmine: true,
    jest: true,
    es6: true,
  },
  settings: {
    react: {
      version: '16.9',
    },
    polyfills: ['Promise', 'URL'],
  },
  parser: '@typescript-eslint/parser',
  plugins: ['react', 'babel', 'jest', '@typescript-eslint', 'react-hooks', 'unicorn', 'markdown'],
  // https://github.com/typescript-eslint/typescript-eslint/issues/46#issuecomment-472486234
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-unused-vars': [2, { args: 'none' }],
        'no-unused-expressions': 'off',
        '@typescript-eslint/no-unused-expressions': 2,
      },
    },
    {
      // In v2, explicitly apply eslint-plugin-markdown's `markdown`
      // processor on any Markdown files you want to lint.
      files: ['components/*/demo/*.md'],
      processor: 'markdown/markdown',
    },
    {
      // In v2, configuration for fenced code blocks is separate from the
      // containing Markdown file. Each code block has a virtual filename
      // appended to the Markdown file's path.
      files: [
        'components/*/demo/*.md/*.ts',
        'components/*/demo/*.md/*.tsx',
        'components/*/demo/*.md/*.js',
        'components/*/demo/*.md/*.jsx',
      ],
      // Configuration for fenced code blocks goes with the override for
      // the code block's virtual filename, for example:
      parserOptions: {
        ecmaFeatures: {
          impliedStrict: true,
        },
        project: './tsconfig.json',
      },
      globals: {
        React: true,
        ReactDOM: true,
        mountNode: true,
      },
      rules: {
        indent: 2,
        'default-case': 2,
        'eol-last': 2,
        'no-console': 2,
        'no-plusplus': 2,
        'no-script-url': 2,
        'prefer-rest-params': 2,
        'compat/compat': 2,
        'react/no-access-state-in-setstate': 2,
        'react/destructuring-assignment': 2,
        'react/no-multi-comp': 2,
        'react/no-array-index-key': 0,
        'jsx-a11y/href-no-hash': 2,
        'jsx-a11y/control-has-associated-label': 2,
        'import/no-extraneous-dependencies': 2,
      },
    },
  ],
  rules: {
    'react/jsx-one-expression-per-line': 0,
    'react/prop-types': 2,
    'react/forbid-prop-types': 2,
    'react/jsx-indent': 2,
    'react/jsx-wrap-multilines': ['error', { declaration: false, assignment: false }],
    'react/jsx-filename-extension': 0,
    'react/state-in-constructor': 2,
    'react/jsx-props-no-spreading': 2,
    'react/destructuring-assignment': 2, // TODO: remove later
    'react/require-default-props': 0,
    'react/sort-comp': 2,
    'react/display-name': 2,
    'react/static-property-placement': 2,
    'react/no-find-dom-node': 2,
    'react/no-unused-prop-types': 2,
    'react/default-props-match-prop-types': 2,
    'react-hooks/rules-of-hooks': 2, // Checks rules of Hooks

    'import/extensions': 0,
    'import/no-cycle': 2,
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          'site/**',
          'tests/**',
          'scripts/**',
          '**/*.test.js',
          '**/__tests__/*',
          '*.config.js',
          '**/*.md',
        ],
      },
    ],
    'jsx-a11y/no-static-element-interactions': 2,
    'jsx-a11y/anchor-has-content': 2,
    'jsx-a11y/click-events-have-key-events': 2,
    'jsx-a11y/anchor-is-valid': 2,
    'jsx-a11y/no-noninteractive-element-interactions': 2,
    // label-has-for has been deprecated
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-for.md
    'jsx-a11y/label-has-for': 2,

    'comma-dangle': ['error', 'always-multiline'],
    'consistent-return': 2, // TODO: remove later
    'no-param-reassign': 2, // TODO: remove later
    'no-underscore-dangle': 2,
    // for (let i = 2; i < len; i++)
    'no-plusplus': 2,
    // https://eslint.org/docs/rules/no-continue
    // labeledLoop is conflicted with `eslint . --fix`
    'no-continue': 2,
    // ban this for Number.isNaN needs polyfill
    'no-restricted-globals': 2,
    'max-classes-per-file': 2,

    'jest/no-test-callback': 0,
    'jest/expect-expect': 0,
    'jest/no-done-callback': 0,
    'jest/valid-title': 0,
    'jest/no-conditional-expect': 0,

    'unicorn/better-regex': 2,
    'unicorn/prefer-string-trim-start-end': 2,
    'unicorn/expiring-todo-comments': 2,
    'unicorn/no-abusive-eslint-disable': 2,

    // https://github.com/typescript-eslint/typescript-eslint/issues/2542#issuecomment-692866111
    'no-use-before-define': 0,
    '@typescript-eslint/no-use-before-define': 2,
    'no-shadow': 2,
    '@typescript-eslint/no-shadow': [2, { ignoreTypeValueShadow: true }],
    // https://github.com/typescript-eslint/typescript-eslint/issues/2528#issuecomment-689369395
    'no-undef': 2,
  },
  globals: {
    gtag: true,
  },
};

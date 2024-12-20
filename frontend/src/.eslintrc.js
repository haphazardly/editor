module.exports = {
    // ...
    extends: ['plugin:svelte/recommended'],
    // ...
    parser: '@babel/eslint-parser',
    // Add an `overrides` section to add a parser configuration for svelte.
    overrides: [
      {
        files: ['*.svelte'],
        parser: 'svelte-eslint-parser'
      }
      // ...
    ]
    // ...
  };
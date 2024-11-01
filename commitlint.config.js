module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'build',
        'chore',
        'ci',
        'docs',
        'feat',
        'fix',
        'hotfix',
        'perf',
        'refactor',
        'release',
        'revert',
        'style',
        'test',
      ],
    ],
    'subject-max-length': [2, 'always', 40],
    'subject-case': [2, 'always', ['lower-case']],
    'scope-enum': [
      2,
      'always',
      [
        'core',
        'api',
        'tests',
        'docs',
        'build',
        'config',
        'types',
        'examples',
        'deps',
        'utils',
        'i18n',
        'styles',
        'performance',
        'refactor',
      ],
    ],
    'scope-empty': [1, 'never'],
    'type-empty': [2, 'never'],
  },
}

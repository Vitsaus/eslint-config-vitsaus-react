module.exports = {
  'extends': 'vitsaus',
  'rules': {
    // React rules
    'jsx-quotes': [2, 'prefer-single'],
    'react/jsx-boolean-value': [2, 'always'],
    'react/jsx-closing-bracket-location': [2, {selfClosing: 'after-props', nonEmpty: 'after-props'}],
    'react/jsx-curly-spacing': [2, 'never', {'allowMultiline': false}],
    'react/jsx-indent': [2, 4],
    'react/jsx-max-props-per-line': [2, {maximum: 3}],
    'react/prefer-es6-class': [2, 'always'],
    'react/require-render-return': 2,
    'react/self-closing-comp': 2,
    'react/sort-comp': 2,
    'react/prop-types': 1,
    'react/no-did-mount-set-state': [2, 'allow-in-func'],
    'react/no-did-update-set-state': 2,
    'react/no-direct-mutation-state': 2
  }
}

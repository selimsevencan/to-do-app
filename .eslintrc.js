module.exports = {
    "extends": "airbnb",
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "rules": {
        "react/forbid-prop-types": 0,
        "react/jsx-curly-spacing": 0,
        "react/jsx-uses-react": 2,
        "react/jsx-uses-vars": 2,
        "react/react-in-jsx-scope": 2,
        "react/prefer-stateless-function": 0,
        "no-var": 1,
        "no-debugger": 1,
        "no-console": 0,
        "no-restricted-syntax": 1,
        "vars-on-top": 1,
        "comma-dangle": 1,
        "no-use-before-define": 0,
        "max-len": [2, 120, 2, {
        "ignoreStrings": true,
        "ignoreComments": true
        }],
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    }
};
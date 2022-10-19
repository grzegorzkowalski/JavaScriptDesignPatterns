module.exports = {
    root: true,
    env: {
        "browser": true,
        "es6": true
    },
    parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
        ecmaFeatures: {
            "modules": true
        }
    },
    rules: {
        "prefer-template": "off",
        "no-var": 1,
        "no-unused-vars": 1,
        "camelcase": 1,
        "no-nested-ternary": 1,
        "no-console": 1,
        "no-template-curly-in-string": 1,
        "no-self-compare": 1,
    },
    ignorePatterns: ["dist", "node_modules", "webpack.*"],
}



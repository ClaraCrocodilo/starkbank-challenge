module.exports = {
    "env": {
        "es2021": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": "latest"
    },
    "rules": {
        "no-extra-semi": 0,
        "no-unused-vars": ["error", { "args": "none" }]
    }
}

module.exports = {
    "parser": "babel-eslint",
    "extends": ["eslint:recommended", "plugin:prettier/recommended"],
    "plugins": [
        "import",
        "prettier"
    ],
    "rules": {
        "semi": [2, 'never'],
        "import/no-extraneous-dependencies": ['error', { devDependencies: true }],
        "max-len": "off",
        "import/prefer-default-export" : "off",
        "no-use-before-define": "off",
        "no-return-assign": ["error", "except-parens"],
        "prettier/prettier": [
            "error",
            { semi: false, singleQuote: true, trailingComma: "es5" },
        ],
    },
     "env": {
        "node": true
     }
};

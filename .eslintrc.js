module.exports = {
    "parser": "babel-eslint",
    "extends": "eslint:recommended",
    "plugins": [
        "import"
    ],
    "rules": {
      "semi": [2, 'never'],
      "import/no-extraneous-dependencies": ['error', { devDependencies: true }],
      "max-len": "off",
      "import/prefer-default-export" : "off",
      "no-use-before-define": "off",
      "no-return-assign": ["error", "except-parens"]
    },
     "env": {
        "node": true
     }
};

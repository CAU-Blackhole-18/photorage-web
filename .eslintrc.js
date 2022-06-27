module.exports = {
  root: true,
  env: {
      browser: true,
      es6: true,
  },
  extends: [
      "plugin:@typescript-eslint/recommended",
       // typescript 표준 규칙 모음
      "plugin:import/errors",
      "plugin:import/warnings",
      "plugin:import/typescript",
      // import 관련 규칙 모음

      "plugin:prettier/recommended",
      "prettier/@typescript-eslint",
      "prettier/react",
       // prettier 관련 규칙 모음
  ],
  parserOptions: {
      ecmaVersion: 2018,
      project: ["./tsconfig.json"],
      // tsconfig 파일의 경로를 참조 해줍니다. 
      // 기준은 root 입니다.
  },
  rules: {
          // 추가하고 싶은 rule을 더 추가해줍니다.
          "ban-types": {
            "options": [
              [
                "Object",
                "Avoid using the `Object` type. Did you mean `object`?"
              ],
              [
                "Function",
                "Avoid using the `Function` type. Prefer a specific function type, like `() => void`."
              ],
              [
                "Boolean",
                "Avoid using the `Boolean` type. Did you mean `boolean`?"
              ],
              [
                "Number",
                "Avoid using the `Number` type. Did you mean `number`?"
              ],
              [
                "String",
                "A Avoid using the `String` type. Did you mean `string`?"
              ],
              [
                "Symbol",
                "Avoid using the `Symbol` type. Did you mean `symbol`?"
              ]
            ]
          },
          "quotemark": [
            true,
            "single"
          ]
      }
};
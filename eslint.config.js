import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs["flat/recommended"],
  {
    ignores: [".vitepress/cache/*"],
    rules: {
      "vue/multi-word-component-names": ["off"],
      "vue/html-indent": ["error", 4],
      "vue/max-attributes-per-line": [
        "error",
        {
          singleline: {
            max: 2,
          },
          multiline: {
            max: 1,
          },
        },
      ],
    },
  },
);

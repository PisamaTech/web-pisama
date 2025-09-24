import { defineConfig, globalIgnores } from "eslint/config";
import { fixupConfigRules, fixupPluginRules } from "@eslint/compat";
import react from "eslint-plugin-react";
import unusedImports from "eslint-plugin-unused-imports";
import _import from "eslint-plugin-import";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
// import jsxA11Y from "eslint-plugin-jsx-a11y";
// import prettier from "eslint-plugin-prettier";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default defineConfig([
  globalIgnores([
    ".now/*",
    "**/*.css",
    "**/.changeset",
    "**/dist",
    "esm/*",
    "public/*",
    "tests/*",
    "scripts/*",
    "**/*.config.js",
    "**/.DS_Store",
    "**/node_modules",
    "**/coverage",
    "**/.next",
    "**/build",
    "!**/.commitlintrc.cjs",
    "!**/.lintstagedrc.cjs",
    "!**/jest.config.js",
    "!**/plopfile.js",
    "!**/react-shim.js",
    "!**/tsup.config.ts",
  ]),

  // Configuración base de JavaScript/TypeScript
  js.configs.recommended,

  {
    extends: fixupConfigRules(
      compat.extends(
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:jsx-a11y/recommended",
        "plugin:@next/next/recommended"
        // Removido "plugin:prettier/recommended" para evitar conflictos
      )
    ),

    plugins: {
      react: fixupPluginRules(react),
      "unused-imports": unusedImports,
      import: _import, // No necesita fixupPluginRules
      "@typescript-eslint": typescriptEslint,
      // prettier: prettier, // Solo si lo necesitas específicamente
    },

    languageOptions: {
      globals: {
        ...globals.browser, // ✅ Mantiene las globales del navegador habilitadas
        ...globals.node,
      },

      parser: tsParser,
      ecmaVersion: 12,
      sourceType: "module",

      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },

    settings: {
      react: {
        version: "detect",
      },
      "import/resolver": {
        typescript: {
          alwaysTryTypes: true,
        },
      },
    },

    files: ["**/*.ts", "**/*.tsx"],

    rules: {
      // Reglas generales
      "no-console": "warn",

      // React
      "react/prop-types": "off",
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",
      "react-hooks/exhaustive-deps": "warn",
      "react/self-closing-comp": "warn",
      "react/jsx-sort-props": "off",

      // Accesibilidad
      "jsx-a11y/click-events-have-key-events": "warn",
      "jsx-a11y/interactive-supports-focus": "warn",

      // Prettier (si decides usarlo)
      // "prettier/prettier": "error",

      // Unused imports/vars - CONFIGURACIÓN SIMPLIFICADA
      "no-unused-vars": "off",
      "unused-imports/no-unused-imports": "warn",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          args: "after-used",
          ignoreRestSiblings: false,
          argsIgnorePattern: "^_.*?$",
          varsIgnorePattern: "^_",
        },
      ],

      // Orden de imports
      "import/order": [
        "warn",
        {
          groups: [
            "type",
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
            "object",
          ],
          pathGroups: [
            {
              pattern: "~/**",
              group: "internal",
              position: "after",
            },
            {
              pattern: "@/**",
              group: "internal",
              position: "after",
            },
          ],
          "newlines-between": "always",
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],

      // Espaciado
      "padding-line-between-statements": [
        "warn",
        {
          blankLine: "always",
          prev: "*",
          next: "return",
        },
        {
          blankLine: "always",
          prev: ["const", "let", "var"],
          next: "*",
        },
        {
          blankLine: "any",
          prev: ["const", "let", "var"],
          next: ["const", "let", "var"],
        },
      ],
    },
  },
]);

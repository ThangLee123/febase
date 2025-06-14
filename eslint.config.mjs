import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      //"@typescript-eslint/no-empty-object-type": ["warn"], // Change error to warning for empty object
      //"@typescript-eslint/no-unused-vars": ["warn"], // Change error to warning for ununsed item
      "@typescript-eslint/no-explicit-any": "off", // Allow 'any' type everywhere
      "no-console": "warn", // Warn on console.log usage
    },
  },
];

export default eslintConfig;

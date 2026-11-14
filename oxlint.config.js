import { defineConfig } from "oxlint"

export const config = defineConfig({
	options: {
		typeAware: true
	},
	rules: {
		"no-constant-condition": ["warn", { checkLoops: "none" }],
		"no-debugger": "allow",
		"no-unused-vars": "warn",
		"prefer-const": "warn",
		"prefer-template": "warn",
		"typescript/ban-ts-comment": "off",
		"typescript/consistent-generic-constructors": ["warn", "constructor"],
		"typescript/consistent-indexed-object-style": ["warn", "index-signature"],
		"typescript/consistent-type-assertions": ["warn", { assertionStyle: "angle-bracket" }],
		"typescript/explicit-member-accessibility": ["warn", { accessibility: "explicit" }],
		"typescript/method-signature-style": ["warn", "method"],
		"typescript/no-deprecated": "warn",
		"typescript/no-non-null-assertion": "off",
		"typescript/no-unnecessary-condition": ["warn", { allowConstantLoopConditions: true }],
		"typescript/no-unnecessary-template-expression": "warn",
		"typescript/no-unnecessary-type-conversion": "warn",
		"typescript/parameter-properties": "warn",
		"typescript/promise-function-async": "warn",
		"typescript/require-array-sort-compare": ["warn", { ignoreStringArrays: true }],
		"typescript/restrict-template-expressions": "warn",
		"typescript/return-await": ["warn", "always"]
	}
})

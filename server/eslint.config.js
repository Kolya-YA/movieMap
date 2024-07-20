import globals from "globals";
import pluginJs from "@eslint/js";
// import { rules } from "@eslint/js/src/configs/eslint-all";

export default [
	pluginJs.configs.recommended,
	{
		languageOptions: { globals: globals.node },
	},
];

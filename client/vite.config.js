/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
// export default defineConfig({

// 	const env = loadEnv(mode, process.cwd(), '')

// 	plugins: [react()],
// 	server: {
// 		proxy: {
// 			"/api": {
// 				// target: "http://localhost:3001",
// 				// target: "https://moviemapserver.onrender.com",
// 				target: env.VITE_API_URL,
// 				changeOrigin: true,
// 			},
// 		},
// 	},
// 	define: {
// 		"process.env.VITE_API_URL": JSON.stringify(env.VITE_API_URL),
// 	},
// });

export default defineConfig(({ command, mode }) => {
	// Load env file based on `mode` in the current working directory.
	// Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
	const env = loadEnv(mode, process.cwd(), "");

	return {
		plugins: [react()],
		server: {
			proxy: {
				"/api": {
					target: env.VITE_API_URL,
					changeOrigin: true,
					//   rewrite: (path) => path.replace(/^\/api/, '')
				},
			},
		},
		define: {
			"process.env.VITE_API_URL": JSON.stringify(env.VITE_API_URL),
		},
	};
});

import { defineConfig,loadEnv	 } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import { viteMockServe } from "vite-plugin-mock";
// export default defineConfig({
//     plugins: [vue(),
// 			createSvgIconsPlugin({
// 				iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
// 				symbolId: 'icon-[dir]-[name]',
// 			}),
// 		],
//     resolve: {
//         alias: {
//             "@": path.resolve("./src") // 相对路径别名  @ = ./src
//         }
//     },
// 		css: {
//       preprocessorOptions: {
//         scss: {
//           javascriptEnabled: true,
//           additionalData: '@import "./src/styles/variable.scss";',
//         },
//       },
//     },
// })

export default defineConfig (({ command, mode }) => {
	let env = loadEnv(mode, process.cwd());
  return {
    plugins: [
      vue(),
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), "src/assets/icons")],
        symbolId: "icon-[dir]-[name]",
      }),
			viteMockServe({
				mockPath:'./mock',
				localEnabled: command === 'serve',//mock接口
			})
    ],
    resolve: {
      alias: {
        "@": path.resolve("./src"), // 相对路径别名  @ = ./src
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          javascriptEnabled: true,
          additionalData: '@import "./src/styles/variable.scss";',
        },
      },
    },
  };
});

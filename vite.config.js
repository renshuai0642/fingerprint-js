// If we run the command line `vite`
// Vite automatically parse this file if we create it

// i can use option param `--config` to set the configuration file
// `vite --config my-config.js`

// Vite automatically use ESModule syntax to parse the configuration file
// even though we don't set `"type":"module"` in package.json

// 优雅配置vite，方式一
// 使用jsdoc注解
// vite self contain ts type
// i can use the smart tip provide by IDE and jsdoc
// 这是jsdoc注解
/** @type {import('vite').UserConfig} */

export default {
    /** 共享选项 */
    // 该目录中的文件，将在构建期间复制到 `outDir` 的根目录
    // 原汁原味地复制，没有转换
    publicDir: "public", // 默认

    // 模式
    // development 开发模式 production 生产模式
    mode: 'development', // 需要手动设置

    // 用到的插件
    // plugins: [],

    // 配置esbuild
    // esbuild: {}

    // 加载 `.env` 文件的目录
    envDir: 'root',

    /** 构建选项 */
    build: {
        // 最终构建产物，使用的模块语法
        target: "modules", // 默认

        // 自动注入到每个index.html的入口。Vite自动计算要预加载的模块。
        // 非HTML入口模式、Library模式，请看文档
        modulePreload: true, // 默认

        // 相对于根目录，指定输出路径
        outDir: 'dist', // 默认

        // 相对于ourDir，指定静态资源存放路径
        // Library模式下，请看文档
        assetsDir: 'assets', // 默认

        // 设置资源阈值，小于阈值的导入或引用资源将内联为base64编码
        // 可以避免http请求
        // 设置为0会禁用此配置
        // 可以设置回调函数，根据布尔值选择是否启用。 ((filePath: string, content: Buffer) => boolean | undefined)
        assetsInlineLimit: 4096, // 默认4KB

        // css代码拆分
        // 如果启用，异步chunk中导入的css将内联到异步thunk本身
        // 如果禁用，将项目中所有css提取到一个css文件
        cssCodeSplit: true, //默认

        // 是否启用sourcemap
        // 请见文档，有蛮多可选的项
        sourcemap: true, //默认false

        // 自定义rollup打包配置，将与vite内部的rollup默认配置合并
        // rollupOptions: {
        // }

        // 构建为库模式Library模式
        // 详情见文档
        // lib: {}

        // 启用/禁用混淆压缩
        // 使用其他方案，详情见文档
        minify: 'esbuild', // 默认，且比terser快20-40倍，压缩率只差1%-2%

        // 将 `publicDir` 目录中的所有文件复制到 `outDir` 中
        copyPublicDir: true, //默认
    },

    /** 依赖优化选项 */
    optimizeDeps: {
        // 默认情况下，vite抓取 index.html 来检测需要预构建的依赖项。（忽略了node_modules、build.outDir、__tests__ 和 coverage）
        // 如果制定了 build.rollupOptions.input，Vite 将转而去抓取这些入口点。
        // 如果这两者都不合你意，则可以使用此选项指定自定义条目——该值需要遵循 fast-glob 模式 ，或者是相对于 Vite 项目根目录的匹配模式数组。当显式声明了 optimizeDeps.entries 时默认只有 node_modules 和 build.outDir 文件夹会被忽略。如果还需忽略其他文件夹，你可以在模式列表中使用以 ! 为前缀的、用来匹配忽略项的模式。如果你不想忽略 node_modules 和 build.outDir，你可以选择直接使用字符串路径（不使用 fast-glob 模式）。
        // string | string[]
        // entries: 

        // 预构建中，强制排除的依赖项
        // string[]
        // exclude: []

        // 默认情况下，不在 node_modules 中的，链接的包不会被预构建。使用此选项可强制预构建链接的包。
        // string[]
        // include: []

        // true 强制依赖预构建，忽略之前缓存或优化过的依赖
        // boolean
        // force
    }
}

// 优雅配置vite，方式二
// 使用工具函数
// import { defineConfig } from 'vite'

// export default defineConfig({
//   // ...
// })

// 优雅配置vite，方式三
// 在 `vite.config.ts` 使用ts配置文件
// import type { UserConfig } from 'vite'

// export default {
//   // ...
// } satisfies UserConfig
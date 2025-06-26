# **node-typescript-boilerplate**
---

[![赞助][sponsor-badge]][sponsor]  
[![TypeScript 版本][ts-badge]][typescript-5-7]  
[![Node.js 版本][nodejs-badge]][nodejs]  
[![APLv2 许可证][license-badge]][license]  
[![构建状态 - GitHub Actions][gha-badge]][gha-ci]

👩🏻‍💻 **开发者就绪**：全面的模板，适用于大多数 [Node.js][nodejs] 项目，开箱即用。

🏃🏽 **即时价值**：包含并预配置所有基础工具：
- [TypeScript][typescript] [5.7][typescript-5-7]
- [ESM][esm]（ES 模块）
- [ESLint][eslint] 及初始规则推荐
- [Vitest][vitest] 用于快速单元测试和代码覆盖率
- Node.js 类型定义
- [Prettier][prettier] 确保代码风格统一
- NPM [脚本](#可用脚本) 支持常见操作
- [EditorConfig][editorconfig] 统一编码风格
- 通过 [Volta][volta] 实现可复现的环境
- [GitHub Actions][gh-actions] 配置示例
- TypeScript 代码和单元测试的简单示例

🤲 **自由开源**：基于 APLv2 许可证。

---

### **快速开始**
建议使用最新的 Node.js [Active LTS 版本][nodejs]。

#### **作为仓库模板使用**
点击 **[Use template][repo-template-action]**（或绿色按钮），在 `src` 目录添加代码，在 `__tests__` 目录添加单元测试。

#### **克隆仓库**
```sh
git clone https://github.com/jsynowiec/node-typescript-boilerplate
cd node-typescript-boilerplate
npm install
```

#### **下载最新版本**
下载并解压 **main** 分支或任一标签：
```sh
wget https://github.com/jsynowiec/node-typescript-boilerplate/archive/main.zip -O node-typescript-boilerplate.zip
unzip node-typescript-boilerplate.zip && rm node-typescript-boilerplate.zip
```

---

### **可用脚本**
- `clean` – 清除覆盖率数据缓存和编译文件
- `prebuild` – 构建前校验源码和测试
- `build` – 将 TypeScript 转译为 ES6
- `build:watch` – 监听模式自动转译
- `lint` – 校验源码和测试
- `prettier` – 格式化文件
- `test` – 运行测试
- `test:watch` – 监听模式自动重运行测试
- `test:coverage` – 运行测试并输出覆盖率

---

### **附加说明**
#### **为何包含 Volta**
推荐[安装][volta-getting-started] Volta 以管理项目工具链。[Volta][volta] 确保工具始终遵循项目设置，切换项目时无需担心环境变更。例如，[LinkedIn 工程师][volta-tomdale] 用它标准化工具链并实现可复现环境。

#### **为何用 Vitest 而非 Jest**
推荐使用 [Vitest][vitest] 进行 TypeScript 单元/集成测试。2023 年起，团队逐步将所有项目从 Jest 迁移至 Vitest。实践表明：
1. Vitest 速度更快（尤其大型测试集）；
2. 原生支持 ES 模块；
3. 配置更简单；
4. 与 TypeScript 协作的开发者体验更佳（如模拟间谍和类型）。  
   *注：工具选择取决于项目具体需求。*

#### **ES 模块 (ESM)**
此模板使用原生 [ESM][esm]。使用前请阅读：[Node.js ESM 文档][nodejs-esm] 及 [TypeScript 4.7 ESM 说明][ts47-esm]。  
*如需 CommonJS，请参考 [转换指南][sindresorhus-esm]。*  
**注意**：本仓库不接受 CommonJS/ESM 相关的问题。

---

### **支持者 & 赞助商**
通过成为 [赞助商][sponsor] 支持本项目。

### **许可证**
基于 APLv2 许可证，详见 [LICENSE](https://github.com/jsynowiec/node-typescript-boilerplate/blob/main/LICENSE)。

[ts-badge]: https://img.shields.io/badge/TypeScript-5.7-blue.svg
[nodejs-badge]: https://img.shields.io/badge/Node.js-22-blue.svg
[nodejs]: https://nodejs.org/dist/latest-v22.x/docs/api/
[gha-badge]: https://github.com/jsynowiec/node-typescript-boilerplate/actions/workflows/nodejs.yml/badge.svg
[gha-ci]: https://github.com/jsynowiec/node-typescript-boilerplate/actions/workflows/nodejs.yml
[typescript]: https://www.typescriptlang.org/
[typescript-5-7]: https://devblogs.microsoft.com/typescript/announcing-typescript-5-7/
[license-badge]: https://img.shields.io/badge/license-APLv2-blue.svg
[license]: https://github.com/jsynowiec/node-typescript-boilerplate/blob/main/LICENSE
[sponsor-badge]: https://img.shields.io/badge/♥-Sponsor-fc0fb5.svg
[sponsor]: https://github.com/sponsors/jsynowiec
[eslint]: https://github.com/eslint/eslint
[prettier]: https://prettier.io
[volta]: https://volta.sh
[volta-getting-started]: https://docs.volta.sh/guide/getting-started
[volta-tomdale]: https://twitter.com/tomdale/status/1162017336699838467
[gh-actions]: https://github.com/features/actions
[repo-template-action]: https://github.com/jsynowiec/node-typescript-boilerplate/generate
[esm]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules
[sindresorhus-esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c
[nodejs-esm]: https://nodejs.org/docs/latest-v16.x/api/esm.html
[ts47-esm]: https://devblogs.microsoft.com/typescript/announcing-typescript-4-7/#esm-nodejs
[editorconfig]: https://editorconfig.org
[vitest]: https://vitest.dev

---

### 参考项目
* https://github.com/jsynowiec/node-typescript-boilerplate
* https://github.com/vrn-deco/cli
* https://github.com/ErKeLost/create-vite-app
* https://github.com/kolorobot/vite-node-starter
* https://github.com/vitejs/vite/tree/main/packages/create-vite
* https://github.com/Uninen/tauri-vue-template
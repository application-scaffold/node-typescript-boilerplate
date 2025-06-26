import { configDefaults, coverageConfigDefaults, defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    // 定义测试时需要排除的文件路径，默认已包含一些常见排除项，新增 'build/**/*' 排除构建目录
    exclude: [...configDefaults.exclude, 'build/**/*'],
    coverage: {
      // 指定使用 V8 引擎进行代码覆盖率收集
      provider: 'v8',
      // 定义在生成覆盖率报告时要排除的文件路径，默认已有排除项，新增 'build/**/*'
      exclude: [...coverageConfigDefaults.exclude, 'build/**/*']
    },
  },
})

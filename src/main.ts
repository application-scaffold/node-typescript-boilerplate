/**
 * 预定义的延迟时间值（单位：毫秒）。
 */
export enum Delays {
  Short = 500, // 短延迟
  Medium = 2000, // 中延迟
  Long = 5000, // 长延迟
}

/**
 * 返回一个在指定时间后解析的 Promise<string>。
 *
 * @param {string} name - 用户名
 * @param {number=} [delay=Delays.Medium] - 延迟解析 Promise 的毫秒数
 * @returns {Promise<string>}
 */
function delayedHello(
  name: string,
  delay: number = Delays.Medium,
): Promise<string> {
  return new Promise((resolve: (value?: string) => void) =>
    setTimeout(() => resolve(`Hello, ${name}`), delay),
  );
}

// 关于被禁用的 ESLint 规则说明请参考 .eslintrc.json 文件的注释
// 以下是禁用 ESLint 错误的示例用法，更多细节请查阅：
// https://eslint.org/docs/latest/user-guide/configuring/rules#disabling-rules

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type, @typescript-eslint/no-explicit-any
export async function greeter(name: any) {
  // 注意：name 参数应为 string 类型，此处使用 any 仅用于触发规则检测
  return await delayedHello(name, Delays.Long);
}

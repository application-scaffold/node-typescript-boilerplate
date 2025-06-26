import { describe, it, afterEach, beforeEach, vi, expect } from 'vitest';
import { Delays, greeter } from '../../src/main.js';

// 描述 greeter 函数的测试用例组
describe('greeter function', () => {
  // 公共测试变量
  const name = 'John';

  // 在每个测试用例执行前设置假定时器
  beforeEach(() => {
    // 使用假定时器替换真实定时器
    // Read more about fake timers
    // https://vitest.dev/api/vi.html#vi-usefaketimers
    vi.useFakeTimers();
  });

  // 在每个测试用例执行后清理环境
  afterEach(() => {
    // 恢复真实定时器
    vi.useRealTimers();
    // 清除所有模拟函数和监听器
    vi.restoreAllMocks();
  });

  // 检查/断言 setTimeout 是否被正确调用
  it('delays the greeting by 2 seconds', async () => {
    // 监听全局的 setTimeout 函数
    vi.spyOn(global, 'setTimeout');

    // 调用被测试的 greeter 函数
    const p = greeter(name);

    // 执行所有待处理的假定时器（异步方式）
    await vi.runAllTimersAsync();
    // 等待 greeter 的 Promise 解析完成
    await p;

    // 断言1: setTimeout 应该只被调用一次
    expect(setTimeout).toHaveBeenCalledTimes(1);

    // 断言2: setTimeout 最后一次调用时的参数
    expect(setTimeout).toHaveBeenLastCalledWith(
      expect.any(Function), // 第一个参数应该是函数类型（回调函数）
      Delays.Long, // 第二个参数应该是 Delays.Long (5000毫秒)
    );
  });

  // 测试用例2：验证 greeter 函数的返回结果
  it('greets a user with `Hello, {name}` message', async () => {
    // 调用被测试的 greeter 函数
    const p = greeter(name);
    // 执行所有待处理的假定时器
    await vi.runAllTimersAsync();

    // 断言：greeter 返回的 Promise 解析值应该是 "Hello, John"
    expect(await p).toBe(`Hello, ${name}`);
  });
});

const isDev = process.env.NODE_ENV === 'development';

/**
 * @description
 * Debugging utility class that logs to console
 * only when `NODE_ENV` is set to `development`
 */
export class debug {
  static log(...args: any[]) {
    if (!isDev) return;
    console.log(...args);
  }

  static error(...args: any[]) {
    if (!isDev) return;
    console.error(...args);
  }

  static warn(...args: any[]) {
    if (!isDev) return;
    console.warn(...args);
  }

  static info(...args: any[]) {
    if (!isDev) return;
    console.info(...args);
  }
}

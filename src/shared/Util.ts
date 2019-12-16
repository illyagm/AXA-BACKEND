export default class Util {
    public static isNullOrUndefined<T>(obj: T | null | undefined): boolean {
        return typeof obj === "undefined" || obj === null || obj['length'] === 0;
    }
}
export type RequiredFields<T, K extends keyof T> = T & { [P in K]-?: NonNullable<T[P]> }

export type RecursiveRequired<T> = Required<{
    [P in keyof T]: T[P] extends object | undefined ? RecursiveRequired<Required<T[P]>> : T[P];
}>;

export type RequiredFields<T, K extends keyof T> = T & { [P in K]-?: NonNullable<T[P]> };

export type DeepPartial<T> = T extends object
  ? {
    [P in keyof T]?: DeepPartial<T[P]>;
  }
  : T;

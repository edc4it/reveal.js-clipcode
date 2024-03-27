export type RequiredFields<T, K extends keyof T> = T & { [P in K]-?: NonNullable<T[P]> }
export type HTMLElementWithParent = RequiredFields<HTMLElement,"parentNode">

export function getCodeBlocks(root: HTMLElement): HTMLElement[] {
  return Array.from(root.querySelectorAll('pre > code'))
    .map((e) => e.parentElement)
    .filter((e) => e !== null)
    .map((e) => e!);
}

export function getCodeBlocks(root: HTMLElement): HTMLElement[] {
  return Array.from(root.querySelectorAll('pre:not([data-cc="false"]) > code'))
    .map((e) => e.parentElement)
    .filter((e) => e !== null)
    .map((e) => e!);
}

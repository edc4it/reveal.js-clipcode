import { getCodeBlocks } from './reveal-helpers.ts';
import { decorateBlock } from './structure.ts';
import { initClipboardActions } from './clipboard.ts';
import { Options } from '../options.ts';
import { RecursiveRequired } from '../util/utility-types.ts';
import { applyStyle } from './css-styles.ts';

export function run(revealElement: HTMLElement, options: RecursiveRequired<Options>) {
  applyStyle(revealElement, options.style);
  const blocks = getCodeBlocks(revealElement);
  blocks.map(decorateBlock);
  // unfortunately, ClipboardJS does not accept HTLMElement[]
  initClipboardActions('.copycode-wrapper > button', options);
}

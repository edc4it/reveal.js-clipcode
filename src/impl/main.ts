import { getCodeBlocks } from './reveal-helpers.ts';
import { decorateBlock } from './structure.ts';
import { initClipboardActions } from './clipboard.ts';
import { Options } from '../options.ts';
import { applyStyle } from './css-styles.ts';

export function run(revealElement: HTMLElement, options: Options) {
  applyStyle(revealElement, options.style);
  const blocks = getCodeBlocks(revealElement);
  blocks.map(decorateBlock);
  // unfortunately, ClipboardJS does not accept HTLMElement[]
  initClipboardActions('.clipcode-wrapper > button', options);
}

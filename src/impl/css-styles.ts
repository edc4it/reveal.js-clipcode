import '../styling/main.css';
import { StyleOptions } from '../options.ts';

export function applyStyle(revealElement: HTMLElement, options: Required<StyleOptions>) {
  revealElement.style.setProperty('--cc-copy-bg', options.copybg);
  revealElement.style.setProperty('--cc-copy-color', options.copycolor);
  revealElement.style.setProperty('--cc-copied-bg', options.copiedbg);
  revealElement.style.setProperty('--cc-copied-color', options.copiedcolor);
  revealElement.style.setProperty('--cc-scale', options.scale.toString());
  revealElement.style.setProperty('--cc-offset', options.offset.toString());
  revealElement.style.setProperty('--cc-radius', options.radius.toString());
  revealElement.style.setProperty('--cc-copyborder', options.copyborder);
  revealElement.style.setProperty('--cc-copiedborder', options.copiedborder);
}

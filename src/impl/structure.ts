import copySVG from '../styling/copy.svg?raw';
import copiedSVG from '../styling/copied.svg?raw';
import { HTMLElementWithParent } from '../util/dom.ts';
import { fragmentClasses } from '../util/reveal-helpers.ts';

export function decorateBlock(codeBlock: HTMLElement) {
  if (!codeBlock.parentNode) {
    console.error('codeBlock does not have a parent', codeBlock);
  } else {
    const wrapper = addWrapper(codeBlock as HTMLElementWithParent);
    const button = document.createElement('button');
    button.title = 'Copy to Clipboard';

    button.innerHTML = `
            ${copySVG}
            ${copiedSVG}
        `;
    wrapper.prepend(button);
    return button;
  }
}

function moveFragmentClasses(codeBlock: HTMLElement & {
                               parentNode: NonNullable<HTMLElement['parentNode']>;
                             }, wrapper: HTMLDivElement,
) {
  // Move fragment from codeBlock to wrapper
  const c = [...codeBlock.classList].filter((e) => fragmentClasses.includes(e));
  wrapper.classList.add(...c);
  codeBlock.classList.remove(...c);
}

function addWrapper(codeBlock: HTMLElementWithParent): HTMLDivElement {
  // Create a wrapper div
  const wrapper = document.createElement('div');
  wrapper.classList.add('copycode-wrapper');

  moveFragmentClasses(codeBlock, wrapper);

  // Insert the wrapper into the DOM just before the codeBlock
  codeBlock.parentNode.insertBefore(wrapper, codeBlock);
  // Move the codeBlock inside the wrapper
  wrapper.appendChild(codeBlock);
  return wrapper;
}

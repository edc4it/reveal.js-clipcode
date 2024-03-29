import ClipboardJS from 'clipboard';
import { Options } from '../options.ts';

export function initClipboardActions(btnSelector: string, options: Options) {
  const buttons = document.querySelectorAll<HTMLButtonElement>(btnSelector);

  buttons.forEach((e) =>
    e.addEventListener('click', () => {
      e.disabled = true;
    }),
  );

  const clipboard = new ClipboardJS(buttons, {
    text: function(trigger) {
      const code = trigger?.nextElementSibling?.querySelector('code');
      const trimmed = code?.innerText.trim();
      // empty string denotes "failure"
      return trimmed ?? '';
    },
  });
  clipboard.on('success', (e) => {
    e.clearSelection();
    const trigger = e.trigger;
    trigger.classList.add('success');
    setTimeout(() => {
      trigger.classList.remove('success');
      trigger.removeAttribute('disabled');
    }, options.timeout);
  });
  clipboard.on('error', (e) => {
    e.trigger.removeAttribute('disabled');
    console.error('error copying to clipboard', e.action);
  });
}

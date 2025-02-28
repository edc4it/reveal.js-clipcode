import { Options } from '../options.ts';

export function initClipboardActions(btnSelector: string, options: Options) {
  const buttons = document.querySelectorAll<HTMLButtonElement>(btnSelector);

  buttons.forEach((e) =>
    e.addEventListener('click', () => {
      e.setAttribute('disabled', 'true');

      const code = e.nextElementSibling?.querySelector('code');
      const trimmed = code?.innerText.trim(); // empty string denotes "failure"
      const lang = getLanguageFromCode(code);

      if (trimmed) {
        const textToWrite = (lang === 'bash' || lang === 'console' || lang === "shell") && trimmed.startsWith('$ ')
          ? trimmed.substring(1).trim()
          : trimmed;

        navigator.clipboard.writeText(textToWrite).then(() => {

          e.classList.add('success');
          setTimeout(() => {
            e.classList.remove('success');
            e.removeAttribute('disabled');
          }, options.timeout);

        }).catch((error) => {
          e.removeAttribute('disabled');
          console.error('error copying to clipboard', error.action);
        });
      }

    }),
  );
}

function getLanguageFromCode(element?: Element | null): string |undefined{
  if (!element) return undefined;

  const languageClass = Array.from(element.classList)
    .find(className => className.startsWith('language-'));

  if (!languageClass) return undefined;

  return languageClass.replace('language-', '');
}

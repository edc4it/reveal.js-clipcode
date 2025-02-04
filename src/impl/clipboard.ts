import {Options} from '../options.ts';

export function initClipboardActions(btnSelector: string, options: Options) {
    const buttons = document.querySelectorAll<HTMLButtonElement>(btnSelector);

    buttons.forEach((e) =>
        e.addEventListener('click', () => {
            e.setAttribute('disabled',"true");

            const code = e.nextElementSibling?.querySelector('code');
            const trimmed = code?.innerText.trim() // empty string denotes "failure"
            if (trimmed) {
                navigator.clipboard.writeText(trimmed).then(() => {

                    e.classList.add('success');
                    setTimeout(() => {
                        e.classList.remove('success');
                        e.removeAttribute('disabled');
                    }, options.timeout);

                }).catch((error) => {
                    e.removeAttribute('disabled');
                    console.error('error copying to clipboard', error.action);
                })
            }

        }),
    );
}

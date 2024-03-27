import {HTMLElementWithParent} from "./util.ts";
import copySVG from "./styling/copy.svg?raw"
import copiedSVG from "./styling/copied.svg?raw"
import "./styling/main.css"

export function decorateBlock(codeBlock: HTMLElement) {
    if (!codeBlock.parentNode) {
        console.error("codeBlock does not have a parent", codeBlock)
    } else {
        const wrapper = addWrapper(codeBlock as HTMLElementWithParent);
        const button = document.createElement("button");
        button.title="Copy to Clipboard";

        button.innerHTML= `
            ${copySVG}
            ${copiedSVG}
        `
        wrapper.prepend(button);
        return button;
    }
}

function addWrapper(codeBlock: HTMLElementWithParent): HTMLDivElement {
    // Create a wrapper div
    const wrapper = document.createElement("div");
    wrapper.classList.add("copycode-wrapper");

    // Move fragment from codeBlock to wrapper
    if (codeBlock.classList.contains("fragment")) {
        wrapper.classList.add("fragment");
        codeBlock.classList.remove("fragment")
    }

    // Insert the wrapper into the DOM just before the codeBlock
    codeBlock.parentNode.insertBefore(wrapper, codeBlock);
    // Move the codeBlock inside the wrapper
    wrapper.appendChild(codeBlock);
    return wrapper;
}


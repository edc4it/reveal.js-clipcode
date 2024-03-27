import {Api as RevealAPI} from "reveal.js";
import {getCodeBlocks} from "./reveal-helpers.ts";
import {decorateBlock} from "./structure.ts";
import {initClipboardActions} from "./clipboard.ts";

export default () => ({
    id: 'copy-code',
    init: (deck: RevealAPI) => {
        const revealElement = deck.getRevealElement()

        if (!revealElement) {
            console.error("Cannot find reveal element")
        } else {
            const blocks = getCodeBlocks(revealElement)
            blocks.map(decorateBlock)
            initClipboardActions(".copycode-wrapper > button")
        }
    }
})



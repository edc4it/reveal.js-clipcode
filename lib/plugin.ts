import {Api as RevealAPI} from "reveal.js";
import {run} from "./impl/main.ts";
import merge from "deepmerge"
import {AugmentedRevealOptions, defaultOptions, Options} from "./options.ts";
import {RecursiveRequired} from "./util/utility-types.ts";

export default () => ({
    id: 'copy-code',
    init: (deck: RevealAPI) => {
        const revealElement = deck.getRevealElement()

        if (!revealElement) {
            console.error("Cannot find reveal element")
        } else {
            const revealOptions = deck.getConfig() as AugmentedRevealOptions;
            const suppliedOptions = revealOptions.clipcode ?? {};
            const options = merge(defaultOptions, suppliedOptions) as RecursiveRequired<Options>
            run(revealElement, options)
        }
    }
})



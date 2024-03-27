import {Api as RevealAPI} from "reveal.js";

export default () => ({
    id: 'copy-code',
    init: ( deck: RevealAPI ) => {
        deck.addKeyBinding( { keyCode: 84, key: 'T', description: 's`' }, () => {
            deck.shuffle();
            console.log('🍻');
        } );
    }
})

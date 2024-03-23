"use strict";
function show_magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician.charAt(0).toLowerCase() + magician.slice(1));
    }
}
// const magicians2: string[] = ["Hania", "Hooria" , "Sohaib"];
// show_magicians(magicians2)  
function make_great2(magicians) {
    const greatmagicians = [];
    for (let i = 0; i < magicians.length; i++) {
        greatmagicians.push(magicians[i] + 'the great');
    }
    return greatmagicians;
}
const magicians3 = ["haina", "hooria", "sohaib"];
const greatmagicians2 = make_great2(magicians3);
show_magicians(magicians3);
show_magicians(greatmagicians2);

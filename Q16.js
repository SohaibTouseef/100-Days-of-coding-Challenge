"use strict";
// 16. More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
let gusest_list = ['Ali', 'farhan', 'raza', 'ayesha'];
// for(let i=0; i<gusest_list.length; i++){
//     console.log('Respeted Sir/Madam' + gusest_list[i] + ',\n We invited you on dinner tomorrow.\nThank you\n')
// }
let not_present = 'farhan';
let new_guest = 'Babar Azam';
gusest_list[1] = new_guest;
for (let i = 0; i < gusest_list.length; i++) {
    console.log('Respeted Sir/Madam' + gusest_list[i] + ',\nWe invited you on dinner tomorrow.\nThank you\n');
}
gusest_list.unshift('shaheen', 'sarfaraz', 'rizwan');
for (let i = 0; i < gusest_list.length; i++) {
    console.log('Respeted Sir/Madam ' + gusest_list[i] + ',\n We invited you on dinner tomorrow.\nThank you\n');
}

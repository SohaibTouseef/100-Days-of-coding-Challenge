"use strict";
// 17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
let gusest_list = ["Ali", "farhan", "raza", "ayesha"];
// for(let i=0; i<gusest_list.length; i++){
//     console.log('Respeted Sir/Madam' + gusest_list[i] + ',\n We invited you on dinner tomorrow.\nThank you\n')
// }
let not_present = "farhan";
let new_guest = "Babar Azam";
gusest_list[1] = new_guest;
// for(let i=0; i<gusest_list.length; i++){
//     console.log('Respeted Sir/Madam' + gusest_list[i] + ',\nWe invited you on dinner tomorrow.\nThank you\n')
// }
gusest_list.unshift("shaheen", "sarfaraz", "rizwan");
// for(let i=0; i<gusest_list.length; i++){
//     console.log('Respeted Sir/Madam ' + gusest_list[i] + ',\n We invited you on dinner tomorrow.\nThank you\n')
// }
console.log("\nUnfortunately we can not arrange big table , only two people allow.");
while (gusest_list.length > 2) {
    let remove_guest = gusest_list.pop();
    console.log(`sorry sir/madam.${remove_guest} you are not invited for dinner.`);
}
for (let i = 0; i < gusest_list.length; i++) {
    console.log("Respeted Sir/Madam " +
        gusest_list[i] +
        ",\nyes you are still invited on tomorrow.dinner\nThank you\n");
}
gusest_list.splice(0, 2);
console.log(gusest_list);

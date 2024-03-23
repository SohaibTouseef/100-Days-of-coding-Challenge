"use strict";
// 14. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
Object.defineProperty(exports, "__esModule", { value: true });
exports.gusest_list = void 0;
let gusest_list = ['Abdullah', 'Adil', 'Athisham', 'ayesha'];
exports.gusest_list = gusest_list;
for (let i = 0; i < gusest_list.length; i++) {
    console.log('Respeted Sir/ Madam' + gusest_list[i] + ',\n We invited you on dinner tomorrow.\n\n Thank you');
}

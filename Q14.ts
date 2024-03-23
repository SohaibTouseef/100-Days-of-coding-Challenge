// 14. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.


let gusest_list : string[] = ['Abdullah','Adil','Athisham','ayesha'];
for(let i=0; i<gusest_list.length; i++){
    console.log('Respeted Sir/ Madam' + gusest_list[i] + ',\n We invited you on dinner tomorrow.\n\n Thank you')
}
export{gusest_list}
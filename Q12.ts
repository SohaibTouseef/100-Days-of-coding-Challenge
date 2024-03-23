// 12. Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.


let members: string[] =['Abdullah','Adil','Athisham','Sohaib','Rohaib'];
let massage: string='how are you doing today: ';
for(let i=0; i<members.length; i++){
    console.log(massage + members[i]);
}
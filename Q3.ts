// 3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

// lowercase
let personName: string ="Sohaib"
console.log("lowercase:", personName.toLowerCase());

// Uppercase
console.log("uppercase:", personName.toUpperCase());

// titlecase
console.log("titlecase:", personName.replace(/\bw/g,c => c.toUpperCase()));


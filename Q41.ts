// 41. Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

function show_magicians(magicians: string[]): void {
  for (const magician of magicians) {
    console.log(magician.charAt(0).toLowerCase() + magician.slice(1));
  }
}

const magicians2: string[] = ["Hania", "Hooria", "Sohaib"];
show_magicians(magicians2);

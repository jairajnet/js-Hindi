const marvel_heros=["Thor",'Iron man','spider man']
const DC_heros=["Superman",'Flash','Bat man']

// marvel_heros.push(DC_heros);
// console.log(marvel_heros);
// console.log(marvel_heros[3][0]);

// marvel_heros.concat(DC_heros);
// console.log(marvel_heros);

// const allHearos=marvel_heros.concat(DC_heros); // concate hold values in new var
// console.log(allHearos);

// const all_new_heros=[...DC_heros,...marvel_heros]
// console.log(all_new_heros);

// flat used to get all elements in nested arrays
// const myArray=[1,2,3,[4,5],[6,7,[8,3,4]]]
// const simplifiedArray=myArray.flat(Infinity)
// console.log(simplifiedArray);

// to create array from another type
// console.log(Array.isArray("Jairaj")); // shows if the string is array ? which is false
// console.log(Array.from("Jairaj")); // converts the string to an array

// to create array from multiple vars
let nm1=100,nm2=200,nm3=300
console.log(Array.of(nm1,nm2,nm3));


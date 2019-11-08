"use strict"
// let skaiciai ='Vienas, Du, Trys, Keturi, Penki, Šeši, Septyni, Aštuoni, Devyni, Dešimt';
// skaiciai = skaiciai.split(',');

// let atsakymas = prompt("Koks Jusų vardas?");
// console.log(atsakymas);

// for(let i=0;i<skaiciai.lenght;i++){
// 	console.log(skaiciai[i]);
// }
//-----------------------------------------------//
// let kiekis = prompt("Kiek bus svečių?");
// let sveciai = [];

// for(let i=0; i<=kiekis;i++){
// 	sveciai.push(prompt("Įveskite vardą"))
// };
// for(let i =0; i<=sveciai.length;i++){
// 	console.log(sveciai[i])
// };
// for(let sveciai of kiekis){
// 	console.log(sveciai)
// };
// let dalykoPavadinimas = [];
// dalykoPavadinimas push('Nuostabus įvertinimas, Puikus įvertinimas, Geras įvertinimas, Normalus įvertinimas, Žemesnis įvertinimas, Žemas įvertinimas, Žemiausias įvertinimas, Tragedija');
// let aprasymai ={
// 	1:'Tragedija',
// 	2:'Baisu',
// 	3:'Blogai',
// 	4:'Per plauką',
// 	5:'Vidutiniškai',
// 	6:'Normaliai',
// 	7:'Neblogai',
// 	8:'Gerai',
// 	9:'Labai gerai',
// 	10:'Puikiai'
// }
let dalykuSkaicius = prompt("Kiek dalykų?");
let dalykas = [];
let balas = [];
let reiksme

for(let i=0; i<=dalykas; i++){
	dalykas.push(prompt("Įveskite dalyką"))
	balas.push(prompt("Įveskite balą"))
};

for(let i=0; i<=dalykas; i++){
if (balas[i] == 10){reiksme = ('Dešimt')}
	else if (balas[i] == 9){reiksme = ('Devyni')}
		else if (balas[i] == 8){reiksme = ('Aštuoni')}
			else if(balas[i] == 7){reiksme = ('Septyni')}
				else if(balas[i] == 6){reiksme = ('Šeši')}
					else if(balas[i] == 5){reiksme = ('Penki')}
						else if(balas[i] == 4){reiksme = ('Keturi')}
							else if (balas[i] == 3){reiksme = ('Trys')}
								else if(balas[i] == 2){reiksme = ('Du')}
									else if(balas[i] == 1){reiksme = ('Vienas')}
	console.log(dalykas[i], balas[i], reiksme);
}
console.log(typeof(15));
console.log(typeof('abc'));
console.log(typeof(true));
console.log(typeof(null));
console.log(typeof('abd5a'));
var x=5; 
var y=null;
//----------------------------------------------------
//STRING METHODS AND PROPERTIES
console.log(typeof(y)); // type de y
var name='omar';
console.log(name); //affichage nom
var age=21;
console.log(age); //affichage age
let lastname='barhoumi';
let fullname= name + " " + lastname;
console.log(fullname);
console.log(fullname.length); // la longeur de fullname
let str="welcome home"; // declaration du chaine
console.log(str.charAt(3)); // le caractére dans la position
console.log(str.indexOf('w')); // index d'un caractére 
console.log(str.lastIndexOf('e'));// index du dernier occurence avec une valeur specifique.
console.log(str.slice(0,7)); // extraction d'une nouvelle section de notre chaine str
console.log(str.substring(0,7)); // même chose pour slice mais elle ne prend que les valeurs positive
var char="orange,strawberry,banane"; // decalration du chaine
var fruits=char.split(','); //divise la chaine de caractere en une liste ordonnée de sous-chaine
console.log(fruits); 
console.log(str.toUpperCase()); // transformer la chaine en majuscule
let str1="WELCOME HOME"; 
console.log(str1.toLowerCase()); // transforme la chaine en miniscule
console.log(str1.replace('HOME','BACK'));// remplacement d'une partie dans la chaine
let str2="programmation"; 
let str3="javascript"; 
console.log(str2.concat(" " , str3)); // permet de concatiner deux chaine
//----------------------------------------------------
//ARRAY METHIDS AND PROPERTIES
var arr=['orange', 'strawberry', 'banane' ,'apple'];
arr.push('ananas') ; // ajout d'un nouvel element
console.log(arr.length); // retourne la longeur de tableau
console.log(arr);
var lastFruits=arr.pop(); // suppression du dernier element
console.log(lastFruits);
console.log(arr);
var firstFruits=arr.shift();
console.log(firstFruits); // suppression du premier element
console.log(arr); 
arr.unshift('pineapple'); 
console.log(arr);
var copy=arr.slice(1,3);
console.log(copy);
arr.splice(1,1,'cherry'); // permet de modifier un element dans le tableau
console.log(arr);
var numbers=[1,2,3,4,5,6,7]; // declaration du tableau numbers
var num=numbers.map(function(num){
    return num*2;
})
console.log(num); // retourne les elements * 2
var even=numbers.filter(function(num){
    return num % 2 === 0;
})
console.log(even);  // retourne les elements pair
var somme=numbers.reduce(function(acc,curr){
    return acc + curr;
},0)
console.log(somme); // retourne la somme d'un tableau
//----------------------------------------------------
//LOOPS 
//for(let i=0; i<5 ; i++){ //boucle for simple
   // console.log(i);
//}
//let ch="gomycode";
//for(let i=0;i<ch.length;i++){
   // console.log(ch.charAt(i));
//}
//var i=0;
//while(i<5){
   // console.log('iteration' + i );
    //i++;
//}
//do{
  //  console.log('iteration ' + i );
    //i++;
//}
//while (i<5);
var age1=18;
if(age1>=18){ // condition
    console.log('you are an adult');
}
else{
    console.log('you are child');
}
// les operateur logiques
var age2= 15;
var permis= true;
if(age2>=18 && permis){ //condition AND (deux conditions correctes)
    console.log("you can drive");
}
else{
    console.log(" you can't");
}
var rainy=false;
var sunny=false;
if(rainy || sunny){ // condition OR (une seule condition soit correcte)
    console.log("you can go out");
}
else{
    console.log("you cant")
}
var night=false;
if(!night){
    console.log("its day time");
}
else{
    console.log("its night")
}
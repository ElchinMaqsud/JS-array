

// Start of 1st task

// let array=[];
// let x=+prompt("Daxil edeceyiniz ededlerin sayini yazin!");
// while(isNaN(x)|| x==0){

//     x=+prompt("Daxil edeceyiniz ededlerin sayini yazin!");
// }

// console.log(x)


//  for(i=0;i<x;i++)
//  {

//    let usernumber =+prompt(`${i+1}-ci ededi daxil edin`)
//     while(isNaN(usernumber)|| usernumber==0 ){
//         usernumber =+prompt(`${i+1}-ci ededi daxil edin`)

//     }
//       array.push(usernumber)

//  }
//  console.log(array)



//  let max=0;
//  for(let i=0; i<array.length; i++)
//  {
//      if(array[i]>max) max=array[i];
//  }
//  console.log(max);



//  let min=100;
//  for(let i=0; i<array.length; i++)
//  {
//      if(array[i]<min) min=array[i];
//  }
//  console.log(min);



//  let middle=0;
//  let cem=0;
//  for(let i=0; i<array.length;i++)
//  {
//     middle=middle+array[i]
//  }
//  cem=middle/array.length
//  console.log(cem)

//  End of 1st task






// Start of 2nd task
// let array=[];
// let x=+prompt("Daxil edeceyiniz ededlerin sayini yazin!");
// while(isNaN(x)|| x==0){

//     x=+prompt("Daxil edeceyiniz ededlerin sayini yazin!");
// }

// console.log(x)
//  for(i=0;i<x;i++)
//  {

//    let usernumber =+prompt(`${i+1}-ci ededi daxil edin`)
//     while(isNaN(usernumber)|| usernumber==0 ){
//         usernumber =+prompt(`${i+1}-ci ededi daxil edin`)

//     }
//       array.push(usernumber)

//  }
//  console.log(array)
//  let doublearray=[];
//  for(i=0; i<array.length;i++){
//      if(array[i]%2==0)
//      doublearray.push(array[i])
//  }
//  console.log(doublearray.length)

//  End of 2nd task

// Start of 3rd task


// let array=[];
// let x=+prompt("Daxil edeceyiniz ededlerin sayini yazin!");
// while(isNaN(x)|| x==0)
// {

//     x=+prompt("Daxil edeceyiniz ededlerin sayini yazin!");
// }

// console.log(x)
//  for(i=0;i<x;i++)
//  {

//    let usernumber =+prompt(`${i+1}-ci ededi daxil edin`)
//     while(isNaN(usernumber)|| usernumber==0 ){
//         usernumber =+prompt(`${i+1}-ci ededi daxil edin`)

//     }
//       array.push(usernumber)

//  }
//  console.log(array)

// let singlearray=[];
// let evenarray = [];
// let singlemax=0;
// let evenmax=0;
// let commonmax = 0;
// for(i=0;i<array.length;i++)
// {
//     if(array[i]%2==1){
//         singlearray.push(array[i])
//         singlemax=singlemax+array[i]
//         commonmax=commonmax+array[i]
//     }
//     else{
//         evenarray.push(array[i])
//         evenmax=evenmax+array[i]
//         commonmax=commonmax+array[i]

//     }
// }
// console.log( singlearray,singlemax,evenarray,evenmax,array,commonmax)
// End of 3rd task


// Start of 4th task
let array = [];
let userInput = prompt("10 eded soz daxil edin!");
while (!isNaN(userInput) || userInput == 0) {
    userInput = prompt(`10 eded soz daxil edin`)

}
for (i = 0; i < 10; i++) {

    userInput = prompt(`${i + 1}-ci sozu daxil edin`)
    while (!isNaN(userInput) || userInput == 0) {
        userInput = prompt(`${i + 1}-ci sozu daxil edin`)

    }
    array.push(userInput)
}
console.log(array)
let max = 0;
let maxvalue;

for (i = 0; i < array.length; i++) {
    if (array[i].length > max) {
        max = array[i].length
        maxvalue = array[i]
    }


}
console.log(max, maxvalue)

let min = 100;
let minvalue;
for(i = 0; i < array.length; i++){
    if (array[i].length < min) {
        min = array[i].length
        minvalue = array[i]
    }
}
console.log(min,minvalue)















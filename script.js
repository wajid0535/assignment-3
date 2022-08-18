//use all loop to iterate over this data.
let object=[
    {"person":"John","age":30,"company":"Google"},
    {"person":"Mohn","age":37,"company":"Flipkart"},
    {"person":"Kohn","age":38,"company":"Amazon"},
    {"person":"Sohan","age":40,"company":"Myntra"},
    {"person":"Jenny","age":70,"company":"Apple"},
]
// for loop
for(let i=0;i<object.length;i++){
    console.log(`
    Person:${object[i].person}
    Age:${object[i].age}
    Company:${object[i].company}
    `)
}

//for each
//object.forEach((item)=>{
  //  console.log(item);
//}
//)

//for in
//for(let key in object){
  //  console.log(object[key]);
//}

//for of
//for(let data of object){
  //  console.log(data)
//}
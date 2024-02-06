// array = [1,2,3,4,5, "foo", "bar", true, 2.51]

// obj = {
//     'first_name': "Foo",
//     'last_name': 'Bar',
//     'age':23,
//     'status': true
// }
// console.log(typeof obj)
// console.log(obj["first_name"])
// console.log(obj.first_name)
// console.log(obj, array)

// for (let i = 0 ; i < 1000; i - 100)
// {
//     console.log(i)
// }

// for (var i of array){
//     console.log(i)
// }

// array.forEach(element => {
//     console.log(element)
// });


// i = 0;
// while(i < 10)
// {
//     console.log(i)
//     i++;
// }_
// do{
//     console.log(i)
//     i++;
// }while(i<10)

// var x = 890

// if (x < 90) {
//     console.log("Si es mayou")
// } else {
//     console.log("No es mayor")

// }

// var animal = "Kitty"

// if(animal == "Kitty"){
// console.log("It is a pretty kitty")
// }else{
// console.log("Is not a pretty kitty")
// }


// var cat = (animal === "Kitty") ? console.log("It is a pretty Kitty") : console.log("Is not a pretty Kitty")

// switch (animal) {
//     case "Kitty":
//         console.log("Case One")
//         break;
//     case "Puppy":
//         console.log("Case Two")
//         break;
//     default:
//         console.log("Other wise")
//         break;
// }

// function prism(l) {
//     return function (w) {
//         return function (h) {
//             return l * w * h
//         }
//     }
// }

// console.log(prism(89)(54)(5))

// const foo = 3(function () {
//     console.log("I am the IIFE")
// }());

// var message = "Hello worl"
// const f3oo = (function (msg) {
//     console.log("I am the IIFE" + msg);
//     return msg;
// }(message));

// console.log(f3oo)


// function prism(l,w,h){
//     return l * w * h ;
// }

// // console.log(prism(2,5,5))

// var sumTwoNumbers = function sum (a, b){
//     return a + b;
// }

// console.log(sumTwoNumbers(2,8))

//--LAS VARIABLES ASI CON PRIVADAS, UNICAMENTE SE PUEDE ACCEDER ATRAVES DE LA VARIABLE QUE SE DEFINE.




// foo();
// var foo = function (){
//     console.log("bar");
// }

//esta funcionando  porque esta dentro del mismo scope
//primero va a buscar el nombre de la funcion
// var say = function say(times) {
//     if (times > 0){
//         console.log("Hello")
//     say(times - 1)
//     }
// }

// var saysay = say
// say = "Opps"
// saysay(100)


// function PersonSay(person, ...msg){
//     msg.forEach(arg => {
//         console.log(person + " say: "+ arg)
//     })
// }

// PersonSay("Fco", "pepe", "Justin", "Hailer", "perro")


// var url =
//  "http://api.stackexchange.com/2.2/questions?site=stackoverflow&tagged=javascript";

//  var responseData = fetch(url).then(response => response.json());

//  responseData.then(({items, has_more, quota_max, quota_remainin}) => {
//     console.log("Quota max: " + quota_max + "\n")
//     for (const {tittle, question_id, owner} of items){
//         console.log(question_id + " Title: " + tittle + " user id: " +  owner.display_name)
//     }
// });


var url =
 "https://jsonplaceholder.typicode.com/users";

//  fetch(url)
//   .then(resp => resp.json())
//   .then(json => console.log(json))
//   .catch(err => console.log(err));
 

//   fetch(url).then(response => response.json())
//   .then(response => {
//     response.forEach(element => {
//         console.log("user:" + element.username + " city: " + element.address.city)
//     })
//   })



// fetch(url, {
//     method: "POST",
//     headers: {
//         "Content_type": "application/json" 
//     },
//     body: JSON.stringify({
//         username: "Foo",
//         email: "foo@foo.com"
//     })
// }).then(response => response.json())
// .then(response => console.log(response))


fetch(url).then(response => response.json())
  .then(response => {
    response.forEach(element => {
        console.log("id:" + element.id + user_id )
    })
  })


  fetch(url, {
    method: "POST",
    headers: {
        "Content_type": "application/json"
    },
    body: JSON.stringify({
        userID: 2,
        title: "Lorem Ipsum Etc etc" 
    })
  }).then(response => respobse.json())
  .then(response => console.log(response))
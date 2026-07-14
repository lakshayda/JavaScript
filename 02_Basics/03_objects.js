// There are two way to declear object 
// 1st one is Literals 
// 2nd one is like constructor 

// singleton
// when we cretae the object from constructor. That object is called Singleton.
// In case of literals. Then singleton not create.
// [Object.create] This way of creating object is called constructor 

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Lakshay",
   "full name": "Lakshay",
    age: 18,
    [mySym]: "mykey1",
    location: "Jaipur",
    email: "lakshay@QurativeX.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Sunday"]
}

console.log(JsUser.email); // this is not the right way.
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);

JsUser.email = "lakshay@Chatgpt.com",
//Object.freeze(JeUser),
JsUser.email = "lakshay@QurativeX.com",
console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello Js user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
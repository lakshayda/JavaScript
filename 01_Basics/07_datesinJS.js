// Dates 

let myDate = new Date();

console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(typeof myDate);

// typeof of a Date is Object.


let myCreatedDate = new Date(2025,0,23);
let myCreatedDate = new Date("01-10-2025");
let myCreatedDate = new Date(2023, 0, 23, 6, 8);
let myCreatedDate = new Date("01-14-2025");

let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate.toLocaleString());
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDate());

//`${newDate.getDate()} and the time is ${newDate.getHours()}: ${newDate.getMinutes()}`

newDate.toLocaleString('default',{
    weekday: 'long',
    timeZone: 'Asia/Kolkata',

})
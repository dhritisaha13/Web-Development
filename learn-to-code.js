//var name = "Dhriti";
//var age = 21;
//
//var message = "Hi, my name is " + name + " and I am " + age + " years old.";

var firstName = "Dhriti";
var lastName = "Saha";
var dob = "13-12-1998";
var age = 21;
var profileImageUrl = "http://coolpicks.com/johnjacob.jpg";
var loginWelcomeMessage = "Welcome, " + firstName + ". Happy " + age + "st birthday!";

console.log(loginWelcomeMessage);

var add = 10 + 15;
var sub = 15 - 10;
var mul = 15 * 4;
var div = 10 / 3;
var mod = 10 % 3;
var msg = "10 divided by 3 gives 3 with a remainder of " + mod;

console.log(msg);

var myAccountBalance = 300;
var nikeShoes = 79.23;

if(nikeShoes <= myAccountBalance){
    myAccountBalance -= nikeShoes;
    console.log("We just bought some dope shoes!");
    console.log("Account Balance: " + myAccountBalance);
}

var students = ["Timmy","Janessa","Arun"];
var naughtyList = [];
naughtyList.push(students[0]);
var index = naughtyList.indexOf("Timmy");
console.log(naughtyList);

if(index>-1){
    naughtyList.splice(index, 1);
}
console.log(naughtyList);


function area(length,width){
    return length * width;
}

var rectangleAreas = [];
rectangleAreas.push(area(10,15));
rectangleAreas.push(area(14,2));
rectangleAreas.push(area(4,5));
console.log(rectangleAreas);


var bankBalance = 500;

function makeTransaction(priceofSale){
    if(priceofSale<=bankBalance){
        bankBalance -=priceofSale;
        console.log("Purchase Successful");
    }else{
        console.log("Insufficient funds");
    }
}

makeTransaction(79.00);
console.log(bankBalance);
makeTransaction(2.32);
console.log(bankBalance);
makeTransaction(10.45);
console.log(bankBalance);
makeTransaction(450.00);
console.log(bankBalance);


var student0 = {
    firstName: "Jayne",
    lastName: "Loo",
    age: 8
};
console.log(student0.firstName + student0.lastName + student0.age);

var student1 = new Object();
student1.firstName = "John";
student1.lastName = "Parker";
student1.age = 7;


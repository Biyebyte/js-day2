"use strict";

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio';
const private = 534;


/////////////////////////////////////////////////////////////////////////////////



function logger() {
    console.log('My name is Iyebiye');
}

// calling | invoking | running
logger();
logger();
logger();


function fruitprocessor(apples, oranges) {

    const juice = `There are ${apples} apples and ${oranges} oranges.`
    return juice;

}

const appleoranege = fruitprocessor(5, 0);
console.log(appleoranege);

const appleorangeJuice = fruitprocessor(10, 5);
console.log(appleorangeJuice);

const orangeJuice = fruitprocessor(0, 10);
console.log(fruitprocessor(0, 10));


function Money(Dollar, Naira) {
    console.log(Dollar, Naira);
    const rate = `The Dollar:Naira rate of ${Dollar} Dollar to ${Naira} Naira is just too high.`
    return rate;

};

const DollarNairaRate = Money(1, 745);
console.log(DollarNairaRate);

const NairaDollar = Money(1, 720);
console.log(NairaDollar);



function money(Naira, Dollar) {

    const rate = `Is it true that  ${Dollar} Dollar is equal to ${Naira} Naira. ?`
    return rate;
}
const nairaDollarRate = money(745, 1);
console.log(money(745, 1));
console.log(nairaDollarRate);


function describeCountry(country, Population, capitalcity) {

    const countrydescription = `${country} has ${Population} Million people and its capital city is ${capitalcity}.`
    return countrydescription;

};
const showCountryDetails = describeCountry('Nigeria', 250, 'Abuja');
const showCountryDetails2 = describeCountry('Ghana', 38, "Accra");
const showCountryDetails3 = describeCountry('kenya', 45, 'Nairobi');

console.log(showCountryDetails, showCountryDetails2, showCountryDetails3);


function calcMyAge(birthyear) {
    const age = 2023 - birthyear;
    return age;
}
const Iyeage = calcMyAge(1998);
console.log(Iyeage);


// function schoolAge(admissionyear) {
//     const age = 2023 - admissionyear;
//     return age;
// }

// const iyebiyeYearsinSchool = schoolAge(2015);
// const israelYearsinschool = schoolAge(2016);
// const favourYearsinschool = schoolAge(2019);

// console.log(israelYearsinschool, favourYearsinschool, iyebiyeYearsinSchool,);


//Function expression
const schoolAge = function (admissionyear) {
    return 2023 - admissionyear;
};
const iyebiyeYearsinSchool = schoolAge(2015);
const israelYearsinschool = schoolAge(2016);
const favourYearsinschool = schoolAge(2019);

console.log(israelYearsinschool, favourYearsinschool, iyebiyeYearsinSchool,);

// const percentageOfworld1 = function (population);
function percentageOfWorld1(population) {

    return (population / 7900) * 100;

}

const populationNigeria = percentageOfWorld1(250);
const populationGhana = percentageOfWorld1(38);
const populationKenya = percentageOfWorld1(45);

console.log(populationGhana, populationKenya, populationNigeria);


// ARROW FUNCTION
const schoolAge = admissionyear => 2023 - admissionyear;
const iyebiyeYearsinSchool = schoolAge(2015);
console.log(iyebiyeYearsinSchool)


const calcAge3 = birthYear => 2023 - birthYear;
const age3 = calcAge3(1998);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstname) => {
    const age = 2023 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstname} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Iyebiye'));
console.log(yearsUntilRetirement(1980, 'Kolawole'));



const cutFruitPieces = function (fruit) {
    return fruit * 4;
}

const fruitprocessor = function (apples, oranges) {

    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `There are ${applePieces} pieces of apple and ${orangePieces} pieces of oranges.`
    return juice;

}
console.log(fruitprocessor(2, 3));


const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {

    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;

    } else {
        console.log(`${firstName} has already retired ${retirement} years`);
        return -1;
    }
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1970, 'Iyebiye'));


const calcAverage = (a, b, c) => (a + b + c) / 3;

const avgDolhins = calcAverage(44, 23, 71);
const avgKoalas = calcAverage(65, 54, 49);

calcAverage(44, 23, 71);

console.log(avgDolhins, avgKoalas);

function checkWinner(avgDolhins, avgKoalas) {

    if (avgDolhins > avgKoalas) {
        console.log(`Dolphins won against Koalas with,  ${avgDolhins} to ${avgKoalas} `)

    } else console.log(`Koalas won against Dolphins with ${avgKoalas} to ${avgDolhins}  `)

}
checkWinner();


const calcAverage = (a, b, c) => (a + b + c) / 3;

const avgDolhins2 = calcAverage(85, 64, 41);
const avgKoalas2 = calcAverage(23, 34, 27);

console.log(avgDolhins2, avgKoalas2);

function checkWinner(avgDolhins2, avgKoalas2) {

    if (avgDolhins2 >= avgKoalas2 * 2) {
        console.log(`Dolphins won against Koalas with, ${avgDolhins2} to ${avgKoalas2}`)

    } else if (avgKoalas2 >= avgDolhins2 * 2) {
        console.log(`Kolas won against Dolphins with ${avgKoalas2} to ${avgDolhins2}`)

    } else {
        console.log(`No Team wins`);
    }

}
checkWinner(avgDolhins2, avgKoalas2);


// const friend1 = 'Odion';
// const friend2 = 'Fejiro';
// const friend3 = 'Emmanuel';

const friends = ['Odion', 'Fejiro', 'Emmanuel'];
console.log(friends);



const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0])
console.log(friends[2])

console.log(friends.length);
console.log(friends[friends.length - 3]);

friends[2] = 'Damilola';
console.log(friends);

//friends = ['Bob', [Alice]; - you cannot change the whole array,
// only some part of it's  items

const firstName = 'Jonas';
const jonas = [firstName, 'Iyebiye', 2023 - 1998, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);

//Excercise
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];
console.log(calcAge(years));

console.log(years[2] - 1000);

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);


const ages = [calcAge(years[0]), calcAge(years[1]),
calcAge(years[years.length - 1]),];
console.log(ages);


const friends = ['Odion', 'Fejiro', 'Emmanuel'];

//ADD ELEMENTS
const newLength = friends.push('Daniel'); "Push" this is used to add an element to the back of the array
console.log(friends);
console.log(newLength)

friends.unshift('favour'); // Adds a new element to the front of the array
console.log(friends);

//REMOVE ELEMENTS
friends.pop(); //removes the last element in the array
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // To remove the first element in the array
console.log(friends);

console.log(friends.indexOf('Odion'));
console.log(friends.indexOf('Steven'));


friends.push(23);

console.log(friends.includes('bob'));
console.log(friends.includes('Emmanuel'));
console.log(friends.includes("Fejiro"));
console.log(friends.includes(23));

if (friends.includes(`peter`)) {
    console.log('you have a frien called peter');
}

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 :
        bill * 0.2;
}


const mySchools = [`federal Poly staff school`, `Command Day secondary school`, `Obafemi Awolowo university`];

mySchools.push('university_of_toronto')
mySchools.unshift('Day care')


//const calcTip = bill => 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;



const bills = [125, 554, 44];

// const tips0 = [calcTip(bills[0])]
// const tips1 = [calcTip(bills[1])]
// const tips2 = [calcTip(bills[2])]

// console.log(tips0);
// console.log(tips1);
// console.log(tips2);  This are all just alternative methods of writing it

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals);


const iyebiyeArray = [
    'Iyebiye',
    'Faleye',
    2023 - 1998,
    'Student'
    [`Fejiro`, `Odion`, 'Favour']
]

const iyebiye = {
    firstName: 'Iyebiye',
    lastName: 'Faleye',
    age: 2023 - 1998,
    profession: 'Student',
    monAmi: [`Fejiro`, `Odion`, 'Favour']

};


const iyebiye = {
    firstName: 'Iyebiye',
    lastName: 'Faleye',
    age: 2023 - 1998,
    profession: 'Student',
    monAmi: [`Fejiro`, `Odion`, 'Favour']

};

console.log(iyebiye);

console.log(iyebiye.lastName);
console.log(iyebiye[`lastName`]);

console.log(iyebiye.profession);
console.log(iyebiye[`profession`]);

const nameKey = 'Name';
console.log(iyebiye[`first` + nameKey]);
console.log(iyebiye[`last` + nameKey]);

// console.log(jonas. `last` + namekey);

const interestedIn = prompt(`what do you want to know about Iyebiye? choose between firstName, lastName, age, profession and friends`);
console.log(iyebiye[interestedIn]);

//console.log(prompt(`what do you want to know about Iyebiye? choose between firstName, lastName, age, profession and friends`))

if (iyebiye[interestedIn]) {
    console.log(iyebiye[interestedIn])
} else {
    console.log(`Invalid request! choose between firstName, lastName, age, profession and friends`);
}

iyebiye.location = 'Nigeria';
iyebiye['twitter'] = '@iyebiye_';
console.log(iyebiye);

//CHALLENGE
// 'Iyebiye has 3 friends and his best friends is Micheal' - you will use multiple dot to get the number of friends

console.log(`${iyebiye.firstName} has ${iyebiye.monAmi.length} friends, and his best friend is called ${iyebiye.monAmi[2]}`);


const iyebiye = {
    firstName: 'Iyebiye',
    lastName: 'Faleye',
    birthyear: 1998,
    profession: 'Student',
    monAmi: [`Fejiro`, `Odion`, 'Favour'],
    hasDriversLicense: false,

    //  calcAge: function (birthyear){
    //     return 2037 - birthyear;
    //  }

    // calcAge: function () {
    //     console.log(this);
    //     return 2037 - this.birthyear;
    // }

    calcAge: function () {
        this.age = 2023 - this.birthyear;
        return this.age;
    },
    getSummary: function () {
        return ` ${this.firstName} is a ${this.calcAge()} year old ${this.profession}, and he has ${this.hasDriversLicense ? `a` : `no`} driver's license.`

    }

};

console.log(iyebiye.calcAge());

console.log(iyebiye.age);


// Challenge

// "Jonas is a 25 year old teacher, and he has a driver's license"
// getSummary;   `${Iyebiye.firstName} is a `


console.log(iyebiye.getSummary());


const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}

const john = {
    fullName: 'John smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }

}

mark.calcBMI();
john.calcBMI();

console.log(mark.bmi, john.bmi);

if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI ${mark.bmi} is higher than ${john.fullName}'s BMI ${john.bmi}`)
} else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI ${john.bmi} is higher than ${mark.fullName}'s BMI ${mark.bmi} `)
}


// for loop keeps running while condition is TRUE

for (let rep = 1; rep <= 30; rep++) {
    console.log(`Lifting weights repitition ${rep} 🏋🏿 `);
}

const iyebiye = [
    'Iyebiye',
    'Faleye',
    2023 - 1998,
    'Student',
    [`Fejiro`, `Odion`, 'Favour'],
    true
];

const types = [];


for (let i = 0; i < iyebiye.length; i++) {
    console.log(iyebiye[i], typeof iyebiye[i]);

    //Filling types array
    // types[i] = typeof iyebiye[i]
    types.push(typeof iyebiye[i]);
};
console.log(types);

const years = [1969, 1991, 2007, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2023 - years[i])
};
console.log(ages);

// Continue and break for loop

console.log('---ONLY STRINGS---')
for (let i = 0; i < iyebiye.length; i++) {
    if (typeof iyebiye[i] !== 'string') continue;

    console.log(iyebiye[i], typeof iyebiye[i]);
}

console.log('---BREAK WITH NUMBER ---')
for (let i = 0; i < iyebiye.length; i++) {
    if (typeof iyebiye[i] === 'number') break;

    console.log(iyebiye[i], typeof iyebiye[i]);
}

// 0,1. ..., 4
// 4, 3, ..., 0


const iyebiye = [
    'Iyebiye',
    'Faleye',
    2023 - 1998,
    'Student',
    [`Fejiro`, `Odion`, 'Favour'],
    true
];

for (let i = iyebiye.length - 1; i >= 0; i--) {
    console.log(i, iyebiye[i]);
}

//Creating a loop in a loop

for (let excercise = 1; excercise < 4; excercise++) {
    console.log(`--------- starting excercise ${excercise}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(` excercise ${excercise}: lifting weight repetition ${rep} 🏋🏿 `)
    }
}


for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repitition ${rep} 🏋🏿 `);
}


let rep = 1;
while (rep <= 10) {
    // console.log(`While: Lifting weights repitition ${rep} 🏋🏿 `);
    // rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`You rolled a ${dice}!`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log(`Loop is about to end...`);
}
*/

//Coding Challenge #4

const calcTip = function (bills) {
  return bills >= 20 && bills <= 3000 ? bills * 0.15 : bills * 0.2;
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);

  tips.push(tip);
  totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // sum = sum + arr[i];
    sum += arr[i];
  }
  return sum / arr.length;
};

console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));

                //BEER
// const button = document.querySelector('button');
// button.addEventListener('click', doThis);

// function doThis(){
//     const age = 18;
//     let ageInput = document.getElementById('input').value;
//     if(age > ageInput){
//         alert('Come back when you are older')
//     }
//     else{
//         alert('Enjoy your beer Sir')
//     }
// }
                            //OR

const button = document.querySelector('button');
button.addEventListener('click', ()=>{
    let canDrink = 21;
    let age = document.getElementById('input').value;
    if(age < canDrink){
        alert('Come back when you are older')
    }else{
        alert('Enjoy your beer sir')
    }
});



                //LOOPS & ARRAY METHODS
                
const companies = [
    {name: 'Company One', category: 'Finance', start: 1981, end: 2003},
    {name: 'Company Two', category: 'Retail', start: 1992, end: 2008},
    {name: 'Company Three', category: 'Auto', start: 1999, end: 2007},
    {name: 'Company Four', category: 'Retail', start: 1989, end: 2010},
    {name: 'Company Five', category: 'Technology', start: 2009, end: 2014},
    {name: 'Company Six', category: 'Finance', start: 1987, end: 2010},
    {name: 'Company Seven', category: 'Auto', start: 1986, end: 1996},
]

const companyStartYear = [1981, 1992, 1999, 1989, 2009, 1987, 1986];

const age = [13, 75, 25, 41, 69, 33, 69, 52, 5, 42, 17, 23, 39, 11, 44, 89];

                    // FOR LOOP

// for(let i = 0; i < age.length; i++){
//     if(age[i] % 2 == 0){                    // what value of age will I divide by 2 and give remainder '%' of 0
//     console.log(age[i])
//     }
// }

                    // FOR EACH

// age.forEach(item => {
//     if(item % 2 == 0){
//         console.log(item)
//     }
// });


                    //  FILTER 

//(getting ages that are 21 and above; first with for loop);

// let canDrink = age.filter(item => item >= 21)
// console.log(canDrink)

// const canDrink = age.filter(item =>{
//     if(item >= 21){
//         return true
//     }    
// });
// console.log(canDrink)

//(getting companies with retail category)
// let autoCompanies = companies.filter(company => company.category == 'Auto');
//     console.log(autoCompanies)

// let retailCompanies = companies.filter(item =>{
//     if(item.category == 'Retail'){
//         return true
//     }
// })
// console.log(retailCompanies)

//(getting old companies)
// let oldCompanies = companies.filter(company => company.start <= 1990);
// console.log(oldCompanies);

//(get companies that lasted 10years)
// let tenYears = companies.filter(company => company.end - company.start >= 10)
//     console.log(tenYears)

//(getting company a name)
// let companyName = companies.filter(company => company.name == 'Company One');
// console.log(companyName)


                //MAP
//(getting company a name)

// let companyName = companies.map(company => company.name);
// console.log(companyName);

//(getting company name together with start and end year);

// const companyRun = companies.map(company =>
//     `${company.name}: ${company.start} - ${company.end}`
// )
// console.log(companyRun);

//(getting squareRoot of ages and adding it to 10)

// let squareAdd = age.map(age =>{
//     let squareRoot = Math.sqrt (age)
//     let add = squareRoot + 10;
//     return add
// });

// console.log(squareAdd)
                            //OR
// let squareAdd = age
// .map(age => Math.sqrt (age))
// .map(age => age + 10)

// console.log(squareAdd)


                    //SORT
// let sortedAge = age.sort((a, b) => a - b);      // 'a' ascending, 'b' desending.
// console.log(sortedAge);

// let sortedCompany = companies.sort((a, b) => {
//     if(a.start > b.start){
//         return 1
//     }else{
//         return -1
//     }
// });
// console.log(sortedCompany)


                //REDUCE

// let endYears = companies.reduce((total, company) => total + company.end, 0);
// console.log(endYears);

// let yearRange = companies.reduce((total, company) => total + (company.end - company.start) ,0);
// console.log(yearRange);


                                //WORKING WITH ALL METHODS
//Question 1: Arrange the ages in ascending order, select even numbers, multiply them by 5 and find the total.
// let combinedMethodsEven = age
// .sort((a, b) => a - b)
// .filter(item => item % 2 === 0)
// .map(item => item * 5)
// .reduce((total, item) => total + item, 0)

// console.log(combinedMethodsEven)


//Question 2: Arrange the ages in descending order, select odd numbers, multiply them by 10 and find the total.

// const combinedMethodsOdd = age
// .sort((a, b) => b - a)
// .filter(item => item % 2 != 0)
// .map(item => item * 10)
// .reduce((total, item) => total + item, 0)

// console.log(combinedMethodsOdd)

//Question 3: Append combinedMethodsEven & combinedMethodsOdd
// let combined = combinedMethodsEven + combinedMethodsOdd;

// console.log(combined)

                                //WORKING WITH ALL METHODS 2
/* Question 1: Arrange company start year in ascending order, select years below 2000,
 multiply each year by 2, add the remaining years */ 

// let startYear = companyStartYear
// .sort((a, b)=> a - b)
// .filter((item, index, arr) => item < 2000)
// .map((item, index, arr) => item * 2)
// .reduce((total, item) => total + item, 0)

// console.log(startYear)



// companies.forEach((item, index, arr)=>{
//     console.log(item.start)
// })


// for(i = 0; i < companies.length; i++){
//     console.log(companies[i].category)
// }


                                //ASYNC, CALLBACKS & PROMISES

                                //CALLBACK
const posts = [
    {title: 'Post One', body: 'This is post One'},
    {title: 'Post Two', body: 'This is post Two'}
];

function getPost(){
    setTimeout(() => {
        let output = '';
        posts.forEach(post => {
            output += `<li>${post.title}</li>`
        });
        document.body.innerHTML = output
    }, 1000);
}

function createPost(post, callback){
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000)
}

createPost({title: 'Post Three', body: 'This is post three'}, getPost)

getPost()

                                        //PROMISES
        

                                        
                                        //ASYNC AWAIT

function makeLiveBroadcast(){
  console.log('Broadcast started')
}

const doLogin = () => {
  return new Promise(resolve => {
    //make network request here
      setTimeout(() => resolve('I waited for 5 seconds'), 5000)
  })
}
const doSomething = async () => {
  const data = await doLogin()
  return data
}
console.log('start')
doSomething().then((response) => {
  console.log('after waiting', response)
  makeLiveBroadcast()
});
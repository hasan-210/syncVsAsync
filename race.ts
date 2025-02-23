// Promise.race & Promise.any & Promise.all

/**
 * `Promise.race` : return a promise that fulfills or rejectes as soon as one of the promises in the iterable fulfills or rejects , 
 * with the valuse or reason from that promsie 
 */

 // iterable Promise

function examplePromiseRace(){ // returns a promise that fulfills or rejects
    const promise1 = new Promise<string>((resolve,reject)=> setTimeout(reject, 1500,'From Promise 1 | (Rejected) '));
    const promise2 = new Promise<string>((resolve,reject)=> setTimeout(reject, 1000,'From Promise 2 | (Rejected) '));

    return Promise.race([promise1 , promise2])
}

// examplePromiseRace().then(
//     value => console.log(value),
//     err=> console.error(err))

examplePromiseRace().then(console.log).catch(console.error)

// const promise1 = new Promise((resolve,reject)=>
//     setTimeout(() => {
//         console.log('first Promise ');    
//     }, 500)
// );

// const promise2 = new Promise((resolve,reject)=>
//     setTimeout(() => {
//         console.log('second Promise ');    
//     }, 500)
// );
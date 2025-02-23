// Promise all 
/**
 * 'Promise all ' returns a single promise that resolve when all of the promise in the iterable argument have 'resolve'
 * or when the iterable argument contain no promise
 *  ** It rejects with the reason of the first promise that rejects
 */

function examplePromiseAll(){ 
    const promise1 = new Promise<string>((resolve,reject)=> setTimeout(reject, 1500,'From Promise 1 | (Rejected) '));
    const promise2 = new Promise<string>((resolve,reject)=> setTimeout(reject, 1500,'From Promise 2 | (Rejected) '));

    return Promise.all([promise1 , promise2])
}

examplePromiseAll().then(console.log).catch(console.error)
// Promise any 


function examplePromiseAny(){ 
    const promise1 = new Promise<string>((resolve,reject)=> setTimeout(resolve, 1500,'From Promise 1  '));
    const promise2 = new Promise<string>((resolve,reject)=> setTimeout(reject, 1500,'From Promise 2  '));
    const promise3 = new Promise<string>((resolve,reject)=> setTimeout(resolve, 500,'From Promise 3  '));

    return Promise.any([promise1 , promise2,promise3])
}

examplePromiseAny().then(console.log).catch(console.error)
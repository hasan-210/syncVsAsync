
type TTodoInfo = {
    id:number,
    todo:string,
    userId:number
   }


type TUserInfo = {
    id:number,
    username:string,
    role: 'ADMIN' | 'USER'
}

function getUserTodoInfo(user:TUserInfo){

    console.log(`Fetching todo list for user ID ${user.id}` );
    return new Promise<TTodoInfo[]>((resolve, reject) => {
        setTimeout(() => {
          let listTodoInfo = [
                {
                    id:1,
                    todo: 'somrthing todo . . .',
                    userId:user.id
                },{
                    id:2,
                    todo: 'somrthing todo . . .',
                    userId:user.id
                },
            ];
            console.log(listTodoInfo);
            
            resolve(listTodoInfo) 
        }, 3000);
    })
} 


function fetchUserInfo(user:TUserInfo){
    console.log('Fetching user  . . .  ');
    return new Promise<TUserInfo>(function(resolve,reject){

        const userList = Array.from({length:100},(_,id)=>{
            return {
                id: id+1
            }
        });

        setTimeout(() => {
            if(user.id > userList.length){
                reject(`User ${user.id} Undefined , Error!!` )
                return ;
            }
                resolve(user);
        }, 1500);
    });
}

const user:TUserInfo ={
    id:90,
    username:'hasan',
    role: "USER"
}

function onSuccess (user:TUserInfo){
    return getUserTodoInfo(user);
}

function onRejected (err:Error){
    console.log(err);   
}

function onFainally(){
    console.log('Stop Loading Indecator');
}

fetchUserInfo(user)
        .then(onSuccess)
        .catch(onRejected)
        .finally(onFainally)

//   fetchUserInfo(user).then(user =>fetchUserInfo(user))
//   .catch(err => console.log(err));
//        |
//        |
//        |
//  or we can write 
// .then(
//     user => getUserTodoInfo(user),
//     err => console.log(err)
// );








// function onSuccess(data:TUserInfo) {
//     console.log("successfully getting the user information ");
//     if (data.role === "ADMIN") {
//         console.log('Welocome Admni , you can go to your dashboard ');
//         console.log(data);
//     }else{
//         console.log(`Welocome back ${data.username}` );
//     }
// }

// function onError(){
//     console.error("Error  getting the user information");
    
// }
// const userData = fetchUserInfo().then(onSuccess,onError) 

// const userData = fetchUserInfo().then(user => console.log(user));
// const userData = fetchUserInfo().then(user => console.log(user));
// console.log(userData);



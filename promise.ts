
type TTodo = {
    id:number,
    todo:string,
    userId:number
   }


type TUser = {
    id:number,
    username:string,
    role: 'ADMIN' | 'USER'
}

function getUserTodo(user:TUser){

    console.log(`Fetching todo list for user ID ${user.id}` );
    return new Promise<TTodo[]>((resolve, reject) => {
        setTimeout(() => {
          let listTodoInfo = [
                {
                    id:1,
                    todo: 'somrthing todo . . .',
                    userId:10
                },{
                    id:2,
                    todo: 'somrthing todo . . .',
                    userId:10
                },
            ];
            resolve(listTodoInfo) 
        }, 3000);
    })
} 


function fetchUser(){
    console.log('Fetching user in proccess ');
    return new Promise<TUser>(function(resolve,reject){
        setTimeout(() => {
            resolve({
                id:10,
                username:'hasan',
                role: "USER"
            });
        }, 1500);
    });
}
function onSuccess(data:TUser) {
    console.log("successfully getting the user information ");
    if (data.role === "ADMIN") {
        console.log('Welocome Admni , you can go to your dashboard ');
        console.log(data);
    }else{
        console.log(`Welocome back ${data.username}` );
    }
}

function onError(){
    console.error("Error  getting the user information");
    
}
// const userData = fetchUser().then(onSuccess,onError) 

// const userData = fetchUser().then(user => console.log(user));
// const userData = fetchUser().then(user => console.log(user));
// console.log(userData);

fetchUser().then(user => getUserTodo(user))

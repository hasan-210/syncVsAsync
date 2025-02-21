
let listTodo:{id:number,todo:string}[] = [];

function getTodoList(callback:()=>void){

    console.log('Fetching todo list . .');

    // Async Operation 
    // Take a while to get todo list

    setTimeout(() => {
        listTodo = [
            {
                id:1,
                todo: 'somrthing todo . . .'
            }
        ] 
      callback();
    }, 3000);
} 

function getUser(callback:()=> void){
    setTimeout(() => {
        console.log('fetching user , with id 3');
       callback(); 
    }, 1500);
}

getUser(()=> {
    console.log('Fetching user in proccess ');
    getTodoList(()=>{
        console.log(listTodo);
        console.log('fetch todo list successfully');
    });
})



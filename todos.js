let input = prompt('What would you like to do?');
const todos = ['Wash Laundry', 'Feed cats'];  //current array with some indexes already in todo list
while (input !== 'quit' && input !== 'q') {  //gives user 2 choices on how to close application
    if (input === 'list') {
        console.log('~~~~~~~~~~~~~~~~~~')
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log('~~~~~~~~~~~~~~~~~~')
    } else if (input === 'new') {  
        const newTodo = prompt('Ok, what is the new task?');
        todos.push(newTodo);   //add item to array
        console.log(`${newTodo} added to the list!`)
    } else if (input === 'delete') {
        const index = parseInt(prompt('Ok, enter an index to delete:'));
        if (!Number.isNaN(index)) {  
            const deleted = todos.splice(index, 1);  //deletes item from array
            console.log(`Ok, deleted ${deleted[0]} from the list!`);
        } else {
            console.log('Error: Unknown index')  //error message if user enters index not available in array
        }
    }
    input = prompt('What would you like to do?')  //loops back to startup question
}
console.log('Application Closed!')  //close
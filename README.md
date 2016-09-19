## 1.2.0 Updates
- there's no need to initialize storage anymore. `todo create "My awesome todo"` will save it from the first attempt - before you had to initialize the storage, now you don't  
- when closing/reopening multiple todos you were forced to write this `todo close 1,2,55`, now you don't have to worry by any additional spaces you might slip in there.

---

## Description
A lightweight CLI that helps you manage todos in a given project.

## Installation
`npm install todo-cli -g`

## Usage
`todo` - lists opened todos  
`todo create <todo>` - creates a new todo. Example: `todo create "Fix signup form validation."`  
`todo close <todoId_1,todoId_2, todoId_3...>` - marks a todo(s) as closed.  
`todo close all` - close all todos    
`todo reopen <todoId_1,todoId_2, todoId_3...>` - reopens closed todo(s).
`todo reopen all` - reopen all todos    
`todo closed` - lists closed todos  
`todo opened` - lists opened todos  
`todo list` - lists both opened and closed todos  
`todo clear` - completly deletes the todos and the storage file  
`todo help` - displays available commands  

## Looks
![Todo Looks](http://content.screencast.com/users/cdruc/folders/Jing/media/d8c62813-0cc7-4739-ba77-03cc99f02859/2016-01-11_1505.png "Todo Looks")
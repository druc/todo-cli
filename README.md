## Description
A lightweight CLI that helps you manage todos in a given project.

## Installation
`npm install todo-cli -g`

## Usage
`todo` - lists opened todos  
`todo create <todo>` - creates a new todo  
`todo close <todoId_1,todoId_2, todoId_3...>` - marks a todo(s) as closed. Make sure you don't have any space between ids - or use quotes \"todoId_1, todoId_2, todoId_3\"   
`todo close all` - close all todos    
`todo reopen <todoId_1,todoId_2, todoId_3...>` - reopens closed todo(s). Make sure you don't have any space between ids - or use quotes \"todoId_1, todoId_2, todoId_3\"  
`todo reopen all` - reopen all todos    
`todo closed` - lists closed todos  
`todo opened` - lists opened todos  
`todo list` - lists both opened and closed todos  
`todo clear` - completly deletes the todos and the storage file  
`todo help` - displays available commands  

## Looks
![Todo Looks](http://content.screencast.com/users/cdruc/folders/Jing/media/d8c62813-0cc7-4739-ba77-03cc99f02859/2016-01-11_1505.png "Todo Looks")
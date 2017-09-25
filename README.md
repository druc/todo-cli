## Description
A lightweight CLI app that helps you manage todos in a given project.

## Short screencast
![Demo](http://content.screencast.com/users/cdruc/folders/Default/media/db60eb68-9a85-4c61-a5c9-1cf378e89e9d/Screen%20Recording%202017-09-25%20at%2002.37%20PM.gif "Demo")

## Installation
`npm install todo-cli -g`

## Usage
`todo` - lists opened todos  
`todo <todo>` - creates a new todo. Example: `todo create "Fix signup form validation."`  
`todo close <id1,id2,id3...>` - marks a todo(s) as closed.  
`todo close all` - close all todos    
`todo reopen <id1,id2,id3...>` - reopens closed todo(s).  
`todo reopen all` - reopen all todos    
`todo closed` - lists closed todos  
`todo opened` - lists opened todos  
`todo list` - lists both opened and closed todos  
`todo clear` - completely deletes the todos and the storage file  
`todo help` - displays available commands  
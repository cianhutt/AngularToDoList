import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todoapp';

  todoArray=[]

  addTodo(value){
    this.todoArray.push(value)
    console.log(this.todoArray)
  }
//submit Form  
todoSubmit(value:any){ console.log(value)  }
  deleteTodo(todo){
    for(let i=0; i<=this.todoArray.length; i++)
    if(todo == this.todoArray[i]){
      this.todoArray.splice(i,1)
    }
  }
}

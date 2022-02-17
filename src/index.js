import './styles.css';
import { crearTodoHtml } from './js/componentes';

import {Todo, TodoList} from './classes';

export const todoList = new TodoList();

//const tarea = new Todo('Limpiar el baño');
//const tarea2 = new Todo('Mirar al bolso');
//crearTodoHtml(tarea);

//todoList.nuevoTodo(tarea);
//todoList.nuevoTodo(tarea2);


console.log(todoList.todos);
todoList.todos[1].imprimirClase();


todoList.todos.forEach(todo => crearTodoHtml( todo ));

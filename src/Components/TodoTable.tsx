import React from "react";
import TodoRow from "./TodoRowItem";

function TodoTable(props: { todos: TodoModel[], deleteTodo: Function}) {
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Description</th>
          <th scope="col">Assigned</th>
        </tr>
      </thead>
      <tbody>
        {/* <TodoRow
                rowNumber={props.todos[0].rowNumber}
                rowDescription={props.todos[0].rowDescription}
                rowAssigned={props.todos[0].rowAssigned}
              ></TodoRow>
              <TodoRow
                rowNumber={props.todos[1].rowNumber}
                rowDescription={props.todos[1].rowDescription}
                rowAssigned={props.todos[1].rowAssigned}
              ></TodoRow> */}
        {props.todos.map((todo) => (
          <TodoRow
            key={todo.rowNumber}
            rowNumber={todo.rowNumber}
            rowDescription={todo.rowDescription}
            rowAssigned={todo.rowAssigned}
            deleteTodo={props.deleteTodo}
          />
        ))}
      </tbody>
    </table>
  );
}

export default TodoTable;

import "./App.css";
import React, { useState } from "react";
import TodoTable from "./Components/TodoTable";
import AddTodoForm from "./Components/AddTodoForm";

function App() {
  const [showAddTodoForm, setShowAddTodoForm] = useState(false);

  const [todos, setTodos] = useState([
    { rowNumber: 1, rowDescription: "Feed Pup", rowAssigned: "Peter" },
    { rowNumber: 2, rowDescription: "water plants", rowAssigned: "Eric" },
    { rowNumber: 3, rowDescription: "buy cereal", rowAssigned: "Peter" },
    { rowNumber: 4, rowDescription: "Charge Batteries", rowAssigned: "Eric" },
  ]);

  const addTodo = (description: string, assigned: string) => {
    let rowNumber = 0;
    if (todos.length > 0) {
      rowNumber = todos[todos.length - 1].rowNumber + 1;
    } else {
      rowNumber = 1;
    }
    const newTodo = {
      rowNumber: rowNumber,
      rowDescription: description,
      rowAssigned: assigned,
    };
    setTodos((todos) => [...todos, newTodo]);
  };

  const deleteTodo = (deleteTodoRowNumber: number) => {
    let filtered = todos.filter(function (value) {
      return value.rowNumber !== deleteTodoRowNumber;
    });
    setTodos(filtered);
  };

  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">Your Todo's</div>
        <div className="card-body">
          <TodoTable todos={todos} deleteTodo={deleteTodo}></TodoTable>
          <button
            onClick={() => setShowAddTodoForm(!showAddTodoForm)}
            className="btn btn-primary"
          >
            {showAddTodoForm ? 'Close New Todo' : 'New Todo' }
          </button>
        </div>
        {showAddTodoForm && <AddTodoForm addTodo={addTodo}></AddTodoForm>}
      </div>
    </div>
  );
}

export default App;

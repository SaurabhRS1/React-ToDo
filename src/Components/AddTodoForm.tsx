import React, { useState } from "react";

function AddTodo(props: { addTodo: Function }) {
  const [description, setDescription] = useState("");
  const [assigned, setAssigned] = useState("");

  // const DescriptionChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
  //   console.log(event.target.value);
  //   setDescription(event.target.value);
  // };

  const submitTodo = () => {
    if (description !== "" && assigned !== "") {
      props.addTodo(description, assigned);
      setAssigned("");
      setDescription("");
    }
  };

  return (
    <div className="mt-5">
      <form>
        <div className="mb-3">
          <label className="form-label">Assigned</label>
          <input
            type="text"
            className="form-control"
            required
            onChange={(e) => setAssigned(e.target.value)}
            value={assigned}
          ></input>
        </div>
        <div className="mb-3">
          <label>Task Description</label>
          <textarea
            rows={3}
            className="form-control"
            required
            //onChange={DescriptionChange}
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          ></textarea>
        </div>
        <button
          type="button"
          className="btn btn-primary mt-3"
          onClick={submitTodo}
        >
          Add Todo{" "}
        </button>
      </form>
    </div>
  );
}

export default AddTodo;

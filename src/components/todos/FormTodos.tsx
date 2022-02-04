import React from 'react';

const FormTodos = () => {
  return (
    <div>
      <form>
        <label htmlFor="form-label">Input a todo</label>
        <input className="form-control mb-3" type="text" />
        <button className="btn btn-outline-secondary" type="button">
          Add
        </button>
      </form>
    </div>
  );
};

export default FormTodos;

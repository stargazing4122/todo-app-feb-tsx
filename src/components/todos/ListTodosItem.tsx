import React from 'react';

interface TodosItemProps {
  id: string;
  index: number;
  title: string;
  state: boolean;
}

const ListTodosItem = ({ index, id, title, state }: TodosItemProps) => {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{id}</td>
      <td>{title}</td>
      <td>{state ? 'completed' : 'imcompleted'}</td>
      <td>
        <button type="button" className="btn btn-success me-1">
          Toggle
        </button>
        <button type="button" className="btn btn-info me-1">
          Edit
        </button>
        <button type="button" className="btn btn-danger me-1">
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ListTodosItem;

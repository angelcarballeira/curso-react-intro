import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css';

function TodoForm() {
  const { setOpenModal, addTodo } = React.useContext(TodoContext);

  const [newTodoValue, setNewTodoValue] = React.useState('');

  const onChange = (e) => {
    setNewTodoValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  const onCancel = (e) => {
    setOpenModal(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nueva tarea</label>
      <textarea
        placeholder='Cortar cebolla para el almuerzo'
        value={newTodoValue}
        onChange={onChange}
      />

      <div className='TodoForm-buttonContainer'>
        <button
          type='button'
          className='TodoForm-button cancel'
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button type='submit' className='TodoForm-button add'>
          Crear
        </button>
      </div>
    </form>
  );
}

export { TodoForm };

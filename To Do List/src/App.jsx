import React, { useState } from 'react';
import styled from 'styled-components';
import "./App.css";
const TodoListContainer = styled.div`
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: rgb(13, 33, 214);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-family: 'Arial', sans-serif;
`;

const Header = styled.h1`
  color: #333;
  text-align: center;
  margin-bottom: 20px;
`;

const TodoForm = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

const TodoInput = styled.input`
  flex: 1;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  outline: none;
`;

const AddButton = styled.button`
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #45a049;
  }
`;

const TodoItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin: 10px 0;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const DeleteButton = styled.button`
  background-color: #e74c3c;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: #c0392b;
  }
`;

const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <body>
    <TodoListContainer>
    <style>{'body { background-color: black; }'}</style>
      <Header>My To-Do List</Header>
      <TodoForm>
        <TodoInput
          type="text"
          placeholder="Add a new task"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <AddButton onClick={handleAddTodo}>Add</AddButton>
      </TodoForm>
      {todos.map((todo, index) => (
        <TodoItem key={index}>
          <span>{todo}</span>
          <DeleteButton onClick={() => handleDeleteTodo(index)}>Delete</DeleteButton>
        </TodoItem>
      ))}
    </TodoListContainer>
    </body>
  );
};

export default App;

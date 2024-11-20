import React, { useState, useEffect } from "react";
import TodosTable from "../reuse/tableComponent";

const FetchTodosTable = () => {
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [visibleTodos, setVisibleTodos] = useState(10);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://jsonplaceholder.typicode.com/todos");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setTodos(data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setTodos([]);
      } finally {
        setLoading(false);
      }
    };

    fetchTodos();
  }, []);

  const loadMoreTodos = () => {
    setVisibleTodos((prevVisible) => prevVisible + 10);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '100%' }}>
    <h2 style={{fontFamily:'cursive'}}><u>Task 5</u></h2>
      <h3>API Response</h3>
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {!loading && !error && (
        <>
          <TodosTable todos={todos.slice(0, visibleTodos)} />
          {visibleTodos < todos.length && (
            <button
              onClick={loadMoreTodos}
              style={{
                marginTop: "10px",
                padding: "10px 20px",
                cursor: "pointer",
                backgroundColor: "#28a745",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                marginLeft:"50%"
              }}
            >
              Load More
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default FetchTodosTable;

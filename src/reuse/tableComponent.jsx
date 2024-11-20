import React from "react";

const TodosTable = ({ todos }) => {
  return (
    <div style={{ overflowX: "auto" }}> {/* Horizontal scroll for the table */}
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginTop: "20px",
        }}
      >
        <thead>
          <tr>
            <th style={tableHeaderStyle}>ID</th>
            <th style={tableHeaderStyle}>Title</th>
            <th style={tableHeaderStyle}>Completed</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.id}>
              <td style={tableCellStyle}>{todo.id}</td>
              <td style={tableCellStyle}>{todo.title}</td>
              <td style={tableCellStyle}>
                {todo.completed ? "✅" : "❌"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Inline styles for table elements
const tableHeaderStyle = {
  backgroundColor: "#f4f4f4",
  padding: "10px",
  border: "1px solid #ddd",
  textAlign: "left",
  minWidth: "150px", // Ensure minimum width for horizontal scrolling
};

const tableCellStyle = {
  padding: "10px",
  border: "1px solid #ddd",
  minWidth: "150px", // Ensure minimum width for horizontal scrolling
};

export default TodosTable;

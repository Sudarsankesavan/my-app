import React, { useState } from "react";
import LetterCheck from "../component/task1(1)";
import ArrayObject from "../component/task1(2)";
import UniqueAgeFilter from "../component/task1(3)";
import CombineAndSortArrays from "../component/task2(1)";
import GetArrayElements from "../component/task2(2)";
import SeparateObjectsFromUserInput from "../component/task2(3)";
import CombineArrays from "../component/task2(4)";
import FetchTodosTable from "../component/task2(5)";

const TabsComponent = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div>
      <div
        style={{
          position: "sticky",
          top: "0",
          backgroundColor: "#f8f9fa",
          borderBottom: "1px solid #ddd",
          padding: "10px",
        }}
      >
        <button
          onClick={() => setActiveTab(1)}
          style={{
            padding: "10px 20px",
            margin: "0 5px",
            backgroundColor: activeTab === 1 ? "#007bff" : "#e9ecef",
            color: activeTab === 1 ? "#fff" : "#000",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Tab 1
        </button>
        <button
          onClick={() => setActiveTab(2)}
          style={{
            padding: "10px 20px",
            margin: "0 5px",
            backgroundColor: activeTab === 2 ? "#007bff" : "#e9ecef",
            color: activeTab === 2 ? "#fff" : "#000",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Tab 2
        </button>
      </div>

      {/* Tab Content */}
      <div style={{ padding: "20px" }}>
        {activeTab === 1 && (
          <>
            <LetterCheck />
            <ArrayObject />
            <UniqueAgeFilter />
          </>
        )}
        {activeTab === 2 && (
        <>
            <CombineAndSortArrays />
            <GetArrayElements/>
            <SeparateObjectsFromUserInput/>
            <CombineArrays />
            <FetchTodosTable/>
        </>
        )}
      </div>
    </div>
  );
};

export default TabsComponent;

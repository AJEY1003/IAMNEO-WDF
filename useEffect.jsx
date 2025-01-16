import React, { useState, useEffect } from "react";

const App = () => {
  const [data, setData] = useState([]); // State to store API data
  const [loading, setLoading] = useState(true); // State for loading status
  const [error, setError] = useState(null); // State for error handling
  const [filteredData, setFilteredData] = useState([]); 
  const [inputValue, setInputValue] = useState(""); // State for input value

  useEffect(() => {
    // Fetch data when the component mounts
    fetch("https://fakestoreapi.com/products/")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json(); // Convert response to JSON
      })
      .then((result) => {
        setData(result); // Save API data to state
        setFilteredData(result); // Initialize filtered data
        setLoading(false); // Turn off loading
      })
      .catch((error) => {
        setError(error.message); // Save error to state
        setLoading(false); // Turn off loading
      });
  }, []); // Empty array means this runs only once

  // Handle input value change
  const handleInputChange = (e) => {
    setInputValue(e.target.value); // Update input value state
  };

  // Handle button click and filter data
  const handleFilter = () => {
    const filtered = data.filter((item) =>
      item.id === Number(inputValue) // Convert inputValue to number for comparison
    );
    setFilteredData(filtered); // Update filtered data state
  };

  // Conditional rendering based on loading and error states
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>API Data:</h1>
      <input
        type="number"
        placeholder="Enter ID"
        value={inputValue} // Controlled input
        onChange={handleInputChange} // Handle input change
      />
      <button onClick={handleFilter}>Filter</button>
      <h2>Filtered Results:</h2>
      {filteredData.length > 0 ? (
        <ul>
          {filteredData.map((item) => (
            <li key={item.id}>
              <p>ID: {item.id}</p>
              <p>Title: {item.title}</p>
              <img src={item.image} alt={item.title} style={{ width: "100px" }} />
            </li>
          ))}
        </ul>
      ) : (
        <p>No matching results found.</p>
      )}
      <h2>All Data:</h2>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <p>ID: {item.id}</p>
            <p>Title: {item.title}</p>
            <img src={item.image} alt={item.title} style={{ width: "100px" }} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;

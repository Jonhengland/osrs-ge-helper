import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'; // If you are using axios
import Navbar from './Navbar'; // Import the Navbar component

function App() {

  const [itemData, setItemData] = useState<any[] | null>(null);

  useEffect(() => {
    axios
      .get('http://localhost:3001/api/runescape') // Now it points to your proxy server
      .then(response => {
        console.log(response.data);
        setItemData(response.data.items); // Log the JSON response
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); // Empty dependency array means this runs only once when the component mounts

  return (
    <div className="App">
    <Navbar /> {/* Include the Navbar component */}
    {itemData !== null ? ( // Conditional rendering based on itemData
      <div>
        <div className="App-content">
          <h1>Items Table</h1>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Icon</th>
                <th>Price</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {itemData.map((item, index) => (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>
                    <img src={item.icon} alt={item.name} />
                  </td>
                  <td>{item.current.price}</td>
                  <td>{item.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    ) : (
      // Render a loading message or spinner when itemData is null
      <p>Loading...</p>
    )}
  </div>
);
}

export default App;

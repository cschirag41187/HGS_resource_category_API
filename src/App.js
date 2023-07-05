import React, { useEffect, useState } from 'react';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        'https://ddic.hgsinteractive.com/api/resource_category'
      );
      const jsonData = await response.json();
      setData(jsonData.value);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <h1>Data from DDIC API</h1>
      <ul>
        {data && data.length > 0 ? (
          data.map((item) => <li key={item.id}>{item.name}</li>)
        ) : (
          <li>No data available</li>
        )}
      </ul>
    </div>
  );
};

export default App;

import React, { useEffect, useState } from 'react';

function AdhkarPage() {
  const [adhkar, setAdhkar] = useState([]);
  const [error, setError] = useState(null);
  const [expandedCategory, setExpandedCategory] = useState(null);

  useEffect(() => {
    // Fetch data from the API
    fetch("https://raw.githubusercontent.com/rn0x/Adhkar-json/refs/heads/main/adhkar.json")
      .then((response) => response.json())
      .then((data) => setAdhkar(data))
      .catch((err) => setError("Failed to load Adhkar"));
  }, []);

  // Toggle category visibility
  const toggleCategory = (categoryId) => {
    setExpandedCategory((prev) => (prev === categoryId ? null : categoryId));
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>اللأذكار</h1>
      {error && <p>{error}</p>}
      {!error && adhkar.length === 0 && <p>Loading...</p>}
      {adhkar.map((item) => (
        <div key={item.id} style={{ direction: 'rtl' }}>
          {/* Category as a clickable button */}
          <h2
            style={{ cursor: 'pointer', color: 'blue', }}
            onClick={() => toggleCategory(item.id)}
          >
            {item.category}
          </h2>
          {/* Show content only if category is expanded */}
          {expandedCategory === item.id &&
            item.array.map((adhkarItem) => (
              <div key={adhkarItem.id} style={{ marginLeft: '20px' }}>
                <p>{adhkarItem.text}</p>
                <p>تكرار: {adhkarItem.count}</p>
                <audio controls>
                  <source
                    src={`https://raw.githubusercontent.com/rn0x/Adhkar-json/refs/heads/main${adhkarItem.audio}`}
                    type="audio/mp3"
                  />
                  Your browser does not support the audio element.
                </audio>
              </div>
            ))}
        </div>
      ))}
    </div>
  );
}

export default AdhkarPage;

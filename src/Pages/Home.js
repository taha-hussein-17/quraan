import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [surahs, setSurahs] = useState([]);

  useEffect(() => {
    const fetchSurahs = async () => {
      const response = await fetch('https://raw.githubusercontent.com/rn0x/Quran-Data/refs/heads/main/Quran.json');
      const data = await response.json();
      setSurahs(data);
    };
    fetchSurahs();
  }, []);

  return (
    <div className="home">
      <h1 className="title">القرآن الكريم</h1>
      <ul className="surah-list">
        {surahs.map((surah) => (
          <li key={surah.id} className="surah-item">
            <Link to={`/surah/${surah.id}`} className="surah-link">
              {surah.name} ({surah.name_translation})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Surah() {
  const { id } = useParams();
  const [surahData, setSurahData] = useState(null);

  useEffect(() => {
    const fetchSurah = async () => {
      const response = await fetch('https://raw.githubusercontent.com/rn0x/Quran-Data/refs/heads/main/Quran.json');
      const data = await response.json();
      const selectedSurah = data.find((surah) => surah.id.toString() === id);
      setSurahData(selectedSurah);
    };
    fetchSurah();
  }, [id]);

  if (!surahData) return <div>Loading...</div>;

  return (
    <div className="surah">
      <h1 className="title">{surahData.name} - {surahData.name_translation}</h1>
      <p>Type: {surahData.type_en} ({surahData.type})</p>
      <p>Words: {surahData.words}, Letters: {surahData.letters}</p>
      <div className="ayahs">
        {surahData.array.map((ayah) => (
          <div key={ayah.id} className="ayah">
            <p className="ayah-ar">{ayah.ar}</p>
            <p className="ayah-en">{ayah.en}</p>
            <audio controls>
              <source src={`https://raw.githubusercontent.com/rn0x/Quran-Data/main${ayah.path}`} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Surah;

import React from 'react';
import { Link } from 'react-router-dom';

function Catalogue() {
  const categories = [
    { id: 1, name: 'الأذكار' },
    { id: 2, name: 'التجويد' },
    { id: 3, name: 'الترجمة' },
    { id: 4, name: 'التلاوات' },
  ];

  return (
    <div className="catalogue">
      <h1 className="title">الفهرس</h1>
      <ul className="category-list">
        {categories.map((category) => (
          <li key={category.id} className="category-item">
            <Link to={`/catalogue/${category.id}`} className="category-link">
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Catalogue;

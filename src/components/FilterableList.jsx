import React, { useEffect, useState } from 'react';
import './FilterableList.css';

const FilterableList = ({ names, sendData, selectedNames, addSelectedName, nameSelect }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setIsFocused(false);
    }, 200);
  };

  const handleItemClick = (name) => {
    console.log('Pruebas de props: ');
    console.log(nameSelect);

    setSearchTerm(name);
    setIsFocused(false);
    sendData(name);
    addSelectedName(name);
  };

  useEffect(() => {
    
    if (nameSelect === '') {
      setSearchTerm('');
    }
  }, [nameSelect]);

  const filteredNames = names.filter(name =>
    name.toLowerCase().includes(searchTerm.toLowerCase()) && !selectedNames.includes(name)
  );

  return (
    <div className="filterable-list">
      <div className="controls">

        <div class="field-wrap">
          
          <input required autocomplete="off"
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange}
            onFocus={handleFocus}
            onBlur={handleBlur} />
        </div>
      </div>
      {isFocused && (
        <ul onMouseDown={(e) => e.preventDefault()}>
          {filteredNames.map((name, index) => (
            <li key={index} onMouseDown={() => handleItemClick(name)}>
              {name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FilterableList;


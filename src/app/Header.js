import React from 'react';
import { NavLink } from 'react-router-dom';
import { projectsData } from '../Projects/projectsData';

const Header = () => {
  return (
    <div className="header">
      {projectsData.map((element, index) => (
        <NavLink to={element.link} key={index}>
          {element.name}
        </NavLink>
      ))}
    </div>
  );
};

export default Header;

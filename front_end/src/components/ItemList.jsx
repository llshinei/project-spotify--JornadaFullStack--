import React from 'react';
import SingleItem from './SingleItem';
import { Link, useLocation } from 'react-router-dom';

const ItemList = ({ title, items, itemsArray, path, idPath }) => {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  const numberItems = isHome ? items : Infinity;
  
  return (
    <div className="item-list">
        <div className="item-list__header">
            <h2>Popular {title}</h2>
            {isHome ? <Link to={path}>Show more</Link> : <></>}
        </div>
        <div className="item-list__container">
            {itemsArray.filter((currentValue, i) => i < numberItems).map((currentObject, i) => <SingleItem {...currentObject} idPath={idPath} key={`${title}.${i}`}/>)}
        </div>
    </div>
  );
};

export default ItemList;
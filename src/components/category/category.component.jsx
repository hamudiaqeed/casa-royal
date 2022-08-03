import React from "react";
import './category.styles.scss';
import { useHistory } from "react-router-dom";

const Category = ({ title, imageUrl, bg, linkUrl }) => {

    const history = useHistory();

    return (
        <div 
            className={`${bg} menu-item`} 
            onClick={() => history.push(linkUrl)}
        >
            <div 
                className="background-image" 
                style={{backgroundImage: `url(${imageUrl})`}}
            />
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
            </div>
        </div>
    )
}

export default Category;
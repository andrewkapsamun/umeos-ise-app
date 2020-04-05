import React from 'react';
import {data} from "./data";

const Title = () => {
    const { title, description } = data.find(item => item.id === "1");
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-3">{title}</h1>
                <p className="lead">{description}</p>
            </div>
        </div>
    );
};
export default Title;

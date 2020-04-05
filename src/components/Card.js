import React from "react";
import {data} from "./data";

const Card = ({id}) => {
    const { title, subtitle } = data.find(item => item.id === id);
    return(
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{subtitle}</p>
            </div>
            <div className="card-footer ">
                <a href={`/page/${id}`} className="btn btn-outline-primary">Подробнее</a>
            </div>
    </div>
    );
};
export default Card;

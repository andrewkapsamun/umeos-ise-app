import React from "react";
import {data} from "./data";
import {Link} from "react-router-dom";

const Card = ({id}) => {
    const { title, subtitle } = data.find(item => item.id === id);
    return(
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{subtitle}</p>
            </div>
            <div className="card-footer ">
                <Link to={`/page/${id}`}>
                    <div className="btn btn-outline-primary">Подробнее</div>
                </Link>
            </div>
    </div>
    );
};
export default Card;

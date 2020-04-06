import React from 'react';
import { data } from './data';
import {Link} from "react-router-dom";

const Page = ({match}) => {
    const { id } = match.params;
    console.log(id, data);
    const { title, subtitle, description } = data.find(item => item.id === id);
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4">{title}</h1>
                <p className="lead">{subtitle}</p>
                <p className="lead">{description}</p>
                <Link to={'/'}>
                    <div className="btn btn-outline-primary">
                        На главную
                    </div>
                </Link>
            </div>
        </div>
    );
};
export default Page;

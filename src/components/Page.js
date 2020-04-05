import React from 'react';
import { data } from './data';

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
                <a href={`/`} className="btn btn-outline-primary">На главную</a>
            </div>
        </div>
    );
};
export default Page;

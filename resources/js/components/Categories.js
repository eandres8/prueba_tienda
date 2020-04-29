import React from 'react';

const Categories = ({categories = [], changeCategorie}) => {

    return (
        <div className="col-lg-3">

            <h1 className="my-4">Categorias</h1>
            <div className="list-group">
                <button onClick={() => changeCategorie(0)} className="list-group-item">Todas</button>
                {
                    categories.map(item => <button onClick={() => changeCategorie(item.id) } className="list-group-item">{item.name}</button> )
                }
            </div>

        </div>
    );
};

export default Categories;
import React from 'react';

const Product = ({name, description, price}) => {

    const dolarize = (num) => {
        const numero = isNaN(num) || !num ? 0 : num;
        return `$ ${new Intl.NumberFormat("de-DE").format(numero)}`;
    };

    return (
        <div className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100">
                <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt="" /></a>
                <div className="card-body">
                    <h4 className="card-title">
                        <a href="#">{name}</a>
                    </h4>
                    <h5>{dolarize(price)}</h5>
                    <p className="card-text">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Product;
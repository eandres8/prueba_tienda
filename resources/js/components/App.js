import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import Navbar from './Navbar';
import Product from './Product';
import Categories from './Categories';

import { getCategories, getProductByCategory } from './api';

const App = () => {

    const [isLoading, setIsLoading] = useState();
    const [categories, setCategories] = useState([{id: 1, name: 'Aseo', description: 'descripción'}]);
    const [products, setProducts] = useState([{id: 1, name: 'Detergente', description: 'descripción', price: 5000}]);

    const changeCategorie = async (idx) => {
        const resp_prod = await getProductByCategory(idx);
        if (resp_prod.success) {
            setProducts(resp_prod.data);
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            const resp = await getCategories();
            const resp_prod = await getProductByCategory(0);

            if(resp.success) {
                setCategories(resp.data);
            }
            if (resp_prod.success) {
                setProducts(resp_prod.data);
            }
        }

        fetchData();
    }, []);

    return (
        <aside style={{paddingTop: 60}}>
            <Navbar />

            <div className="container">

                <div className="row">

                    <Categories categories={categories} changeCategorie={changeCategorie} />

                    <div className="col-lg-9">

                        <div className="row">

                            {
                                products.map(item => <Product {...item} /> )
                            }

                        </div>
                    </div>

                </div>

            </div>

            <footer className="py-5 bg-dark" style={{
                position: 'fixed',
                width: '100%',
                bottom: 0}}>
                <div className="container">
                    <p className="m-0 text-center text-white">Copyright &copy; Mi tienda 2020</p>
                </div>
            </footer>
        </aside>
    )
}

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}

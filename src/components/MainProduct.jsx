import React from 'react'
import Product from './Product/Product';

const MainProduct = (props) => {
    const{products,onAdd} = props;
    return (
        <>
        <div className="container">
            <h2>products</h2>
            <div className="wrapper">
                {products.map((product)=>(
                    <Product key={product.id} product={product} onAdd={onAdd} />
                ))}
            </div>
        </div>
            
        </>
    )
}

export default MainProduct

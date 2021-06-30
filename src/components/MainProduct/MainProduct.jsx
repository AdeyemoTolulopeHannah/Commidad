import React,{useState, useEffect} from 'react'
import CategoryButton from '../Category/CategoryButton';
import Product from '../Product/Product';
import './Mainproduct.css'

const MainProduct = (props) => {

    const{products, onAdd} = props;
    const [tag, setTag] = useState('desert')
    const [filterproducts, setFilteredProducts] = useState([])


    useEffect(() =>{
        tag ==='all'? setFilteredProducts(products):setFilteredProducts(products.filter(product =>product.tag === tag ))
    }, [tag])
    return (
        <>
        <div className="container">
            <div className="flex">
            <div className="button">
                <CategoryButton name='desert' handleTag={setTag}/>
                <i className='line'></i>
                <CategoryButton name='chinese' handleTag={setTag}/>
                <i className='line'></i>
                <CategoryButton name='burger' handleTag={setTag}/>
                <i className='line'></i>
                <CategoryButton name='fries' handleTag={setTag} />
                <i className='line'></i>
                <CategoryButton name='pizza' handleTag={setTag}/>
                <i className='line'></i>
                <CategoryButton name='sandwich' handleTag={setTag}/>
            </div>
            <div className="wrapper">
                {filterproducts.map((product)=>(
                    <Product key={product.id} product={product} onAdd={onAdd}  />
                ))}
            </div>
            </div>
        </div>
            
        </>
    )
}

export default MainProduct

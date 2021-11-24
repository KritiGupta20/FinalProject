import React from 'react';
import Products from '../products/products';
import Title from './title/title';
import { ProductConsumer } from '../../context/context';
import classes from './productList.module.css';


function ProductList(){
   
        return ( 
            <React.Fragment >
            
            {/* <div className = { classes.body } > */}
            
            <Title/>
            
            {/* <div className = "container-fluid py-3 " > */}
            {/*  */}
            {/* <div className = "row"> */}
            
            {/* <ProductConsumer> { */}
                {/* value => { */}
                    {/* return value.products.map(product => { */}
                        {/* return <Products key = { product.id } */}
                        {/* product = { product } */}
                        {/* />; */}
                    {/* }) */}
                {/* } */}
            {/* }  */}
            {/* </ProductConsumer>  */}
            {/* </div>  */}
            {/* </div>  */}
            {/* </div>   */}
            </React.Fragment>
        );
    

}

export default ProductList;
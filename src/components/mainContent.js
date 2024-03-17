import React from 'react'

import product_data from '../data/product_data'

const MainContent = () => {
    console.log(product_data)

    const listItems = product_data.map( (item) => 
        <div className='card' key={item.id}>
            <div className='card-img'>
                <img 
                    src={item.thumb}
                    alt="Headphone"
                />
            </div>
            <div className='card-header'>
                <h2> {item.product_name} </h2>
                <p> {item.description} </p>
                <p className='price' > {item.price} <span className='currency'> {item.currency} </span> </p>
                <div className='btn'>
                    Add to Cart
                </div>
            </div>



        </div>
    )

    return(
        <div className='main-content'>
            <h3> Headphone </h3>
            {listItems}
        </div>
    )
}

export default MainContent;


import React from 'react';

const MenuItems = ({data}) => {
    console.log(data);
    const {name, image, price, recipe} = data
    return (
        <div className='flex space-x-4'>
            <img src={image} style={{borderRadius:'0 200px 200px 200px'}} className='w-[100px]' alt="" />
            <div>
                <h3 className='uppercase'>{name}-------------</h3>
                <p>{recipe}</p>

            </div>
            <p className='text-yellow-500 '>{price}</p>
        </div>
    );
};

export default MenuItems;
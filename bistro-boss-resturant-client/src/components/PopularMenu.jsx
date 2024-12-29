import React, { useEffect, useState } from 'react';
import SectionTitle from '../Shared/SectionTitle';
import MenuItems from '../Shared/MenuItems';

const PopularMenu = () => {
    const [menu, setMenu] = useState([])

    useEffect(()=>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const popularItems = data.filter(item => item.category === 'popular')
            setMenu(popularItems)
        })
    }, [])

    console.log(menu);

    return (
       <section className='mb-12'>
        <SectionTitle heading={"From out menu"} subHeading={"Pupular items"}></SectionTitle>
       <div className='grid md:grid-cols-2 gap-10'>
       { 
            menu.map(item=> 
            <MenuItems data={item} key={item._id}></MenuItems>
        )
        }
       </div>
       <div className='text-center mt-5'>
       <button className='uppercase  border-0 border-b-4  btn btn-outline'>Order Now</button>

       </div>

       </section>
    );
};

export default PopularMenu;
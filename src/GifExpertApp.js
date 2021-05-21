

import React, { useState } from 'react'
import AddCategory from './Components/AddCategory';
import ShowItems from './Components/ShowItems';

const GifExpertApp = () => { 
    
    //const arreglo=["Perro","Gato","Leon"];

    const [category,setAddCategory] =useState(['One Punch']);
    // console.log(category);
    // const AddCategoryLista=()=>{
    //     setAddCategory(arreglo=>[...arreglo,valor]);
    // }
    
    return (
        <div>
            <h1>Capstone</h1>
            {/* aqui agrego con el buscador lo que quiero buscar */}
            <AddCategory setAddCategory={setAddCategory}/>
            <hr/>
            {/* <button onClick={AddCategoryLista}>Add</button> */}
            <ol>
                {
                   category.map((categorias)=>{
                            // return <li key={categorias}>{categorias}</li>
                       return    <ShowItems key={categorias}  categorias={categorias}/>
                   })
                }
            </ol>
        </div>
    )
};

export default GifExpertApp;

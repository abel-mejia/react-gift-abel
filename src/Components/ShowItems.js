import React, { useEffect, useState } from 'react'
import giftGenerate from '../helpers/getGifts';
import GifgridItem from './GifgridItem';

const ShowItems = ({categorias}) => {
    

    //  const[count,setCount]=useState(0);
     const[imagesitos,setImages]=useState([]);

    //  const RenderizarPagina=()=>{
    //     setCount(count+1);
    //  }
     //para que solo me renderize una sola vez
     useEffect(()=>{
        giftGenerate(categorias)
            .then((img)=>{
                return setImages(img);
            })
     },[categorias]);
    //dependencia de varias categorias no solo puede ser una por eso se le pone ,[categorias]
    
     //funcion---
     
    //FUNCION BUCLE SE  EJECUTA VARIAS VECES QUE SE RENDERIZA LA PAGINA
    // giftGenerate();
    
   

    return (
        <>
        <h2>{categorias}</h2>
        <div className="caja">
            {/* <button onClick={RenderizarPagina}>aumentar</button> */}
                    {/* //imagenes={imagenes} esto se detalla como propiedad completa    {...imagenes}=>indica la destructuracion de el arreglo*/}
                {   
                    imagesitos.map((imagenes)=>
                         <GifgridItem key={imagenes.id} {...imagenes}/>
                    )      
                }
       

        </div>
        </>
    )
}

export default ShowItems;

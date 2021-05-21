
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({setAddCategory}) => {

        const[Inputplaceholder,setImput]=useState("Edith Morales :D");

                const setFormulario=(e)=>{
                    e.preventDefault();
                    if(Inputplaceholder.trim().length > 2){
                        setAddCategory((categoria)=>[Inputplaceholder,...categoria]);
                        setImput("");
                    }
                }
                
                const setInsertarValor=(e)=>{
                    setImput(e.target.value);
                }

    return (
        <form onSubmit={setFormulario}>
             <input 
                type="text"
                value={Inputplaceholder}
                onChange={setInsertarValor}
            />
        </form>
    )
}

AddCategory.propTypes={
    setAddCategory:PropTypes.func.isRequired
}

export default AddCategory;

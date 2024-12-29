import React, { useState } from 'react'


function Form({addItem}) {

  const [description,setDescription] = useState('');
  const [quantity,setQuantity] = useState(1);
 

  function handleSubmit(e) {
    // prevent the refresh of the page
    e.preventDefault() 

    if(!description.trim()){
      alert('Please enter an item description')
      return ;
    }  
    // create a new item object
     const newItem ={
       description ,
       quantity ,
       packed : false ,
       id : Date.now()
        };
        
        addItem(newItem);
       

    setDescription('');
    setQuantity(1);
  }

  return (
    <form className='add-form'  onSubmit={handleSubmit}>
      <h3>What do you need for your  trip?</h3>
      <select
      value={quantity}
      onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {
          Array.from({ length : 20 }, (_, i) => i + 1).map
          ((n) => (
            <option
             key={n} 
             value={n}>
              {n}
             </option>
          ))
        }
      </select>
      <input
       value={description}
       onChange={(e) => setDescription(e.target.value)}
       type='text' 
       placeholder='Item...' />
      <button>Add</button>
     
    </form>
  )
}

export default Form

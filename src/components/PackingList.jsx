import React, { useState } from 'react'
import Item from './Item';

function PackingList({items,onDelete,onToggele,onClearAll}) {

const  [sortBy , setSortBy] = useState('input');
const [showModal , setShowModal] = useState(false);

function handleClearAll(){
  onClearAll();
  setShowModal(false);
}

let sortedItems;

if (sortBy === "input") sortedItems = items;

if (sortBy === "description")
  sortedItems = items
    .slice()
    .sort((a, b) => a.description.localeCompare(b.description));

if (sortBy === "packed")
  sortedItems = items
    .slice()
    .sort((a, b) => Number(a.packed) - Number(b.packed));

    if (sortBy === "quantity")
      sortedItems = items
        .slice()
        .sort((a, b) => Number(b.quantity) - Number(a.quantity));
  
  
    return (
    
    <div className='list'>
   <ul>
    {
       sortedItems.map((item)=>  (
       <Item 
       key={item.id} 
       item={item} 
       onDelete={onDelete}
       onToggele={onToggele}
       
        />
       ))}
    </ul>
    <div>
      <select className='actions' value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value='input'>Sort By Input Status </option>
        <option value='description'>Sort By Input Description</option>
        <option value='packed'>Sort By Input Packed</option>
        <option value='quantity'>Sort By Input Quantity</option>
      </select>
      <button onClick={() => setShowModal(!showModal)}>Clear Items</button>
      {showModal && (
        <div className="modal">
        <div className="modal-content">
          <h3>Are you sure?</h3>
          <p>Do you really want to clear all items?</p>
          <div className="modal-actions">
            <button onClick={handleClearAll}>Yes, clear all</button>
            <button onClick={() => setShowModal(false)}>Cancel</button>
          </div>
        </div>
      </div>
      )}
    </div>
    </div>
    
  
  )

  
}

export default PackingList
 
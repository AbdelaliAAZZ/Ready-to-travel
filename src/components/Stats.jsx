import React from 'react'

function Stats({items}) {
  
  const totalItems = items.length;
  const itmesPacked= items.filter(item => item.packed).length;
  const porcentageLeft = Math.round((itmesPacked / totalItems) * 100);


  console.log(itmesPacked)
  return (
    <footer className='stats'>
        <em>
         {
          totalItems !== 0 ?
          `You have ${totalItems} items in your packing list, and you alraedy packed ${itmesPacked} (${porcentageLeft}%)`
          : 'Add some items to your packing list'
         }
        </em>
    </footer>
  )
}

export default Stats

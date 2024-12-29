
function Item({item , onDelete , onToggele}) {
 

  return (
    <li>      
      <input 
      type='checkbox'
      onChange = {() => onToggele(item.id)}
      />
      <span style={item.packed ? {textDecoration: 'line-through'} : {}}>
       {item.quantity} {item.description} 
      </span> 
      <button onClick={() => onDelete(item.id)}>❌</button>
    </li>
  )
}
export default Item;
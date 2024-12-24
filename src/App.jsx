import Logo from './components/Logo'
import Form from './components/Form'
import PackingList from './components/PackingList'
import Stats from './components/Stats'
import {useState} from 'react'


function App() {
 

 const [items, setItems] = useState([]);

  function handlAddItem(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeletItem(id){
    setItems((items) => items.filter(item => item.id !== id ))
  }

  function handleToggle(id) {
    setItems((items) => items.map(item => item.id === id ?
      {...item, packed : !item.packed}  
      :item
    ))
  }

  function handleDeleteAll(){
   setItems([]);
  }

  return (
    <div className='app'>
    <Logo />
    <Form  addItem = {handlAddItem}/>
    <PackingList  items={items} onDelete={handleDeletItem} onToggele={handleToggle} onClearAll={handleDeleteAll}/>
    <Stats items = {items}/>
    </div>
  )
}

export default App



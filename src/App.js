
import React , { useState } from 'react';
import './App.css';
import Categories from './Categories';
import Filtration from './filtration';
import NavBarC from './NavBarC';
import Food from './FoodApi';
import Pulse from 'react-reveal/Pulse';
function App() {

   const [FoodItems,UseItemsState]=useState(Food);
   
// To Add li main meals
   const all_li_items=['الكل',...new Set(Food.map((i)=>i.categroy))]

  //  To Filter all items with List
  const CategFilter=(catg)=>{
    if(catg==="الكل"){
      UseItemsState(Food);
    }
    else{
      const newArr=Food.filter((item)=>item.categroy===catg);
      UseItemsState(newArr);
    }
  }


  //  To Filter all items with  Search button

  const SeachValue=(itemMatch)=>{
    if(itemMatch !=="  "){
     console.log(itemMatch)
     const SearchFilter=Food.filter((item)=>item.title===itemMatch);
     UseItemsState(SearchFilter);
     
    }
    else{
      UseItemsState(Food);
    }
     
    
  }
  return (
    <div className="App">
  
      <NavBarC SeachValue={SeachValue}/>
      <Filtration CategFilter={CategFilter} all_li_items={all_li_items}/>
    <main>
    <Pulse>
    <h1 style={{marginTop:10}}>قائمة الطعام</h1>
    </Pulse>
    <Categories FoodItems={FoodItems}/>

    
    
    </main>
    </div>
  );
}

export default App;

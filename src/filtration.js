import React from 'react'
import './filtration.css';

const Filtration = ({CategFilter,all_li_items}) => {
 
  const onFilter=(i)=>{
  
    CategFilter(i)
  }
 
  return (
    <div>
    <section id='filter' >
    <ul>
  {
    all_li_items.map((i)=>{  
      return(

      
        <li onClick={()=>onFilter(i)}>{i}</li>

      )
})
} 
</ul>
</section> 
 

    </div>
  )
}

export default Filtration

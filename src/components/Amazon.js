import React from 'react';
import list from "../Data";
import Cards from './Cards';
const Amazon = ({handleClick,data,click}) => {
  return (
    <section>
{
      click==0?(

        list.map((item)=>(
            
            <Cards item={item} key={item.id} handleClick={handleClick}/>    
            
        ))

      ):(

        data.map((item)=>(
            
            <Cards item={item} key={item.id} handleClick={handleClick}/>       
        ))

      )
        }
    </section>
  )
}

export default Amazon

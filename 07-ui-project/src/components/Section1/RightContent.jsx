import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  console.log(props.users)
  return (
    <div id='right' className='h-full p-6 w-2/3 overflow-x-auto flex flex-nowrap gap-10 '>
     {props.users.map( (elem,idx) =>{
      return <RightCard key={idx} id={idx} img={elem.img} tag={elem.tag} intro={elem.intro} color={elem.color}/>
     })}
    
    </div>
  )
}

export default RightContent

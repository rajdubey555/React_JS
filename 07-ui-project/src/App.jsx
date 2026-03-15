import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'


const App = () => {

  const users = [
    { img: 'https://i.pinimg.com/736x/69/97/e2/6997e27d80a8c24a002f7ebe7407a69e.jpg', intro: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, porro neque ex quis iure tempora.', tag: 'Satisfied' ,color:'red'},
    { img: 'https://i.pinimg.com/736x/09/87/95/09879535011b8f94de145661059fd225.jpg', intro: 'Raj, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, porro neque ex quis iure tempora.', tag: 'Banking' ,color:'blue' },
    { img: 'https://i.pinimg.com/736x/55/a1/43/55a143a65d96150cc303017574fe7c1f.jpg', intro: 'Aman, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, porro neque ex quis iure tempora.', tag: 'Jobs'  ,color:'yellow'},
   { img: 'https://i.pinimg.com/736x/69/97/e2/6997e27d80a8c24a002f7ebe7407a69e.jpg', intro: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, porro neque ex quis iure tempora.', tag: 'Satisfied' ,color:'orange' },
    { img: 'https://i.pinimg.com/736x/09/87/95/09879535011b8f94de145661059fd225.jpg', intro: 'Raj, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, porro neque ex quis iure tempora.', tag: 'Banking' ,color:'magenta' },
    { img: 'https://i.pinimg.com/736x/55/a1/43/55a143a65d96150cc303017574fe7c1f.jpg', intro: 'Aman, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, porro neque ex quis iure tempora.', tag: 'Jobs' ,color:'emerald' }
 
  ]

  return (
    <div >
      <Section1 users={users} />
      <Section2 />
    </div>
  )
}

export default App

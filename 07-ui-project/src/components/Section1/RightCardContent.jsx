import React from 'react'
import { ArrowRight } from 'lucide-react'
const RightCardContent = (props) => {
  return (
     <div className='absolute top-0 left-0 h-full w-full p-10 flex flex-col justify-between'>
                <h2 className='bg-white rounded-full font-bold h-10 w-10 flex justify-center items-center'>{props.id+1}</h2>
                <div>
                    <p className='text-xl leading-normal text-white mb-10'>{props.intro}</p>
                    <div className='flex justify-between'>
                        <button style={{backgroundColor:props.color}} className=' text-white font-medium px-8 py-2 rounded-full '>{props.tag}</button>
                        <button  className=' bg-blue-700 text-white font-medium px-4 py-3 rounded-full '><ArrowRight /></button>
                    </div>
                </div>
            </div>
  )
}

export default RightCardContent

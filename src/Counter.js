
import React, { useState } from 'react'
import { CounterHeading } from './CounterHeading'

export const Counter = () => {
    let[count,counterSet]=useState(0)

    function increament()
    {
        if (count >= 10 && count < 50)
         {
            counterSet(count + 5)
        }
        else if (count >= 50) {
            counterSet(count + 10)
        }
        else {
            counterSet(count + 1)
        }
    }

    function decreament()
    {
        if (count >= 10 && count < 50) {
            counterSet(count - 5)
        } else if (count > 50) {
            counterSet(count - 10)
        } else if (count > 0) {
            counterSet(count - 1)
        }
    }

  return (

    <>
             <div className='w-25  m-auto d-flex align-items-center justify-content-center' style={{ height: "100vh" }}>
            <div className='bg-light shadow-sm border p-5 text-center'>
                <CounterHeading count={count}/>
                <button onClick={increament} type="button" className="btn btn-outline-primary">+</button>
                <button onClick={decreament} type="button" className="btn btn-outline-success ms-1">-</button>
            </div>
        </div>

    </>
  )
}

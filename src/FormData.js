
import React from 'react'

export const FormData = (props) => {
  return (
    <>
            <span> First Name :- {props.firstName}</span>
            <br />
            <span> Last Name :- {props.lastName}</span>
            <br/>
            <span> email :- {props.email}</span>
            <br />
            <span> date :- {props.date}</span>
            <br />
            <span> password :- {props.password}</span>

    </>
  )
}

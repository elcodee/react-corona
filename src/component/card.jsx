import React from 'react'

export default function Card(props) {
   return (
      <>
         <div className="box-div p-4">
            <font color={ props.color }>
               <h4>{ props.title }</h4>
               <hr />
               <h3>{ props.content}</h3>
            </font>
         </div>
      </>
   )
}

import React from 'react'
import { useParams} from 'react-router-dom';
import { useState } from 'react';

/**
* @author
* @function OrderDetails
**/

export const OrderDetails = (props) => {
    let { OrderId } = useParams();

    const [OrderDetails, setOrderDetails] = useState(null);
    console.log(OrderId);
    
    if (!OrderDetails) {
        return 
     }
  
  return(
    <div>OrderDetails</div>
   )
  }

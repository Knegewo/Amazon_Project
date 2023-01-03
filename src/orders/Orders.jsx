import React, { useEffect, useState } from 'react'
import Order from '../order/Order';
import { useStateValue } from '../StateProvider';
import { db } from '../firebase';
import './Orders.css'


function Orders() {
    const [{ basket, user }, dispatch] = useStateValue();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
      if(user){ 
    db.collection('users')
      .doc(user?.uid)
      .collection("orders")
      .orderBy("created", "desc")
      .onSnapshot((snapshot) =>
        setOrders(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
           
          }))   
        )
      );

      } else {
        setOrders([]);
        // console.log("set order is empty");
      }
   
    }, [user]);
    return (
      <div className="orders">
        <h1>Your Orders</h1>
        <div className="orders__order">
          {orders?.map((order) => (
            <Order order={order}/>
          ))}
        </div>
      </div>
    );
  }
  
  export default Orders;

// function Orders(order) {

//     const [{basket, user}, dispatch] = useStateValue();

//     const [orders, setOrders] = useState();

    // useEffect(() => {
    //     if (user) {
    //       db.collection('users')
    //         .doc(user?.uid)
    //         .collection('orders')
    //         .orderBy('created', 'desc')
    //         .onSnapshot((snapshot) =>
    //           setOrders(
    //             snapshot.docs.map((doc) => ({
    //               id: doc.id,
    //               data: doc.data(),
    //             }))
    //           )
    //         );
    //     } else {
    //       setOrders([]);
    //     }
//     //   }, [user]);
//       return (
//         <div className="orders">
//           <h1>Your Orders</h1>
//           <div className="orders__order">
//             {/* {orders?.map((order) => (
//               <Order order={order} />
//             ))} */}

// {order.data.basket?.map((item) => ( 
//             <CheckoutProduct
//              id={item.id}
//              title={item.title}
//              image={item.image}
//              price={item.price}
//              rating={item.rating}
//              hideButton
//             />
// ))}
//           </div>
//         </div>
//       );
//     }

//     useEffect(() => {   //import the db 
//         if (user) {
//           db.collection('users')
//             .doc(user?.uid)
//             .collection('orders')
//             .orderBy('created', 'desc')
//             .onSnapshot((snapshot) =>
//               setOrders(
//                 snapshot.docs.map((doc) => ({
//                   id: doc.id,
//                   data: doc.data()
//                 }))
//               )
//             );
//         } else {
//           setOrders([]);
//         }
//       }, [user]);
        
//   return (

//     <div className='orders'>
//         <h1>Your Orders</h1>
//         <div className='orders__order'>
//             {orders?.map(order => (
//                 <Order order={order} />
//             ))}
//         </div>
//     </div>
//   );
//  }

// export default Orders;
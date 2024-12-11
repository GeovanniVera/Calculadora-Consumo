import { useState } from "react"
import {  MenuItem, OrderItem } from "../types";

export default function useOrder() {
    // state de order
    const [order,setOrder] = useState<OrderItem[]>([]);
    const [tip, setTip] = useState(0);
    
    // agregar orden
    const addOrderItem = (item : MenuItem) => {
        const itemExist = order.find(orderItem => orderItem.id === item.id);
        if(itemExist){
            const updatedOrder = order.map(orderItem => orderItem.id === item.id ? {...orderItem , quantity: orderItem.quantity + 1} : orderItem)
            setOrder(updatedOrder)
        }else{
            const newItem : OrderItem = {...item, quantity: 1}
            setOrder([...order, newItem])
        }
    }

    //borrar orden
    const removeItemOrder =(id : MenuItem['id']) => {
        const itemExist = order.find(item => item.id == id);
        if(itemExist){
            const updatedOrder = order.filter(item => item.id !== id);
            setOrder(updatedOrder)         
        }
    }

    const placeOrder = () => {
        setOrder([])
        setTip(0)
    }

    
    return {
        order,
        tip,
        setTip,
        addOrderItem,
        removeItemOrder,
        placeOrder
    }
}

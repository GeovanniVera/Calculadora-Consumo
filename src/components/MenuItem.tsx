import type {MenuItem} from "../types"

type MenuItemProps={
    item: MenuItem
    addOrderItem: (item : MenuItem) => void
}


export default function MenuItem({item,addOrderItem}:MenuItemProps) {

  return (
    <button
    className="border-2
     border-gray-600 
     border-e-violet-700  
     border-e-4
     w-full 
     p-3 
     flex 
     justify-between 
     hover:bg-violet-700
     hover:text-white
     rounded"
     onClick={()=>addOrderItem(item)}
    >
        <p>
           {item.name} 
        </p>
        <p className="font-black">
            ${item.price}
        </p>
    </button>
  )
}

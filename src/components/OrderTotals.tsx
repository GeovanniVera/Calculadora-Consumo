import { useMemo } from "react"
import { OrderItem } from "../types"
import { formatCurrency } from "../helpers"

type OrderTotalsProps ={
    order:OrderItem[],
    tip:number
    placeOrder: () => void
}

export default function OrderTotals({order,tip,placeOrder} : OrderTotalsProps) {
    //esta funcion calcula el subtotal
    const subTotalAmaunt = useMemo(()=>order.reduce((total,item) => total + (item.quantity * item.price), 0)
    ,[order])
    
    //esta funcion calcula la propina
    const tipAmount = useMemo((() => subTotalAmaunt * tip),[order,tip]);

    //esta funcion calcula el total
    const totalAmaunt = useMemo(()=> subTotalAmaunt + tipAmount,[tip,order])
    return (
    <>
        <div className="space-y-3">
            <h2 className="font-black text-2xl">
                Totales y Propina:
            </h2>
            <p>Subtotal a pagar: {' '}
                <span className="font-bold">{formatCurrency(subTotalAmaunt)}</span>
            </p>
            <p>Propina: {' '}
                <span className="font-bold">{formatCurrency(tipAmount)}</span>
            </p>
            <p>Total a pagar: {' '}
                <span className="font-bold">{formatCurrency(totalAmaunt)}</span>
            </p>
        </div>
        <button 
        className="w-full bg-black text-slate-100 font-bold p-3 uppercase disabled:opacity-30 mt-10"
        disabled={totalAmaunt === 0}
        onClick={placeOrder}
        >
            Guardar Orden
        </button>
    </>
  )
}

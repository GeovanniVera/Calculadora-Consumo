import { formatCurrency } from "../helpers"
import { MenuItem, OrderItem } from "../types"

type OrderContentsProps = {
    order: OrderItem[]
    removeItemOrder: (id: MenuItem['id']) => void
}
export default function OrderContents({ order, removeItemOrder }: OrderContentsProps) {

    return (
        <div>
            <h2 className="font-black text-4xl mb-10">
                Consumo
            </h2>
            <div className="space-y-3">
                {
                    order.map(item => (
                        <div
                            key={item.id}
                            className="flex justify-between border-t border-gray-200 py-5 last-of-type:border-b items-center"
                        >
                            <div className="">
                                <p className="text-lg">
                                    {item.name} - {formatCurrency(item.price)}
                                </p>
                                <p className="font-black">
                                    Cantidad: {item.quantity} - {formatCurrency(item.price * item.quantity)}
                                </p>
                            </div>
                            <button
                                className="bg-red-600 h-8 w-8 rounded-full text-white font-black"
                                onClick={() => removeItemOrder(item.id)}
                            >
                                X
                            </button>
                        </div>
                    ))

                }
            </div>
        </div>
    )
}

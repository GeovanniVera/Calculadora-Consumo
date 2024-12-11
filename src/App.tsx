import MenuItem from "./components/MenuItem"
import OrderContents from "./components/OrderContents";
import { menuItems } from "./data/db"
import useOrder from "./hooks/useOrder"
import OrderTotals from "./components/OrderTotals";
import TipPercentageFrom from "./components/TipPercentageFrom";

function App() {

  const { addOrderItem, order, removeItemOrder, tip, setTip, placeOrder } = useOrder();

  return (
    <>
      <header className="bg-violet-950 py-5">
        <h1 className="text-center text-4xl font-black text-slate-50">Calculadora de Propinas y Consumo</h1>
      </header>
      <main
        className="max-w-7xl 
      mx-auto 
      mt-20 
      py-20 
      grid 
      md:grid-cols-2
      bg-slate-100">
        <div className="p-5">
          <h2 className="text-4xl font-black">Menu</h2>
          <div className="space-y-3 mt-10">
            {menuItems.map(item => (
              <MenuItem
                //props
                key={item.id}
                item={item}
                addOrderItem={addOrderItem}
              />
            ))}
          </div>
        </div>
        <div className="border border-dashed border-slate-300 p-5 rounded space-y-10">
          {order.length ? (
            <>
              <OrderContents
                order={order}
                removeItemOrder={removeItemOrder}
              />

              <TipPercentageFrom
                setTip={setTip}
                tip={tip}
              />

              <OrderTotals
                order={order}
                tip={tip}
                placeOrder={placeOrder}
              />
            </>
          ) : (
            <p className="text-center font-black text-xl"> La orden esta vacia</p>
          )}

        </div>
      </main>
    </>
  )
}

export default App

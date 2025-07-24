import { useState, useMemo } from "react";

function Cart() {
    const [cart, setCart] = useState([
        { id: 1, name: "Laptop", price: 50000 },
        { id: 2, name: "Phone", price: 30000 },
        { id: 3, name: "Headphones", price: 2000 },
    ]);
    const [discount, setDiscount] = useState(0);

    const totalPrice = useMemo(() => {
        console.log("Calculation total price...");
        return cart.reduce((total, item) =>
            total + item.price
            , 0);
    }, [cart])


    return (
        <div>
            <h2>Shopping cart</h2>
            {cart.map((item) => (
                <p style={{ marginLeft: '5px' }} key={item.id}>{item.name} : price is {item.price}</p>
            ))}

            <h3>Total price: {totalPrice}</h3>
            <button onClick={() => setDiscount(discount + 10)}>Increase discount</button>
        </div>
    );
}

export default Cart;
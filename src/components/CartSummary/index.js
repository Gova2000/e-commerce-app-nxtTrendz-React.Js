// Write your code here

import CartContext from '../../context/CartContext'

import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value

      const totalPrice = cartList.reduce(
        (acc, item) => acc + item.quantity * item.price,
        0,
      )

      const totalQuantity = cartList.reduce(
        (acc, item) => acc + item.quantity,
        0,
      )

      return (
        <div className="cart-summary-card">
          <div className="responsive-cart-summary-card">
            <h1 className="cart-summary-title">Order Summary</h1>
            <hr />
            <div className="cart-list-items">
              <p>{`${cartList.length} Items in cart`}</p>
              <p> {totalQuantity}</p>
            </div>

            <hr />
            <div className="amount-container">
              <h1 className="cart-summary-amount-tagName">Order Total: </h1>
              <h1 className="cart-summary-amount">{`Rs ${totalPrice} /-`}</h1>
            </div>
            <button className="proceed-btn" type="button">
              Checkout
            </button>
          </div>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary

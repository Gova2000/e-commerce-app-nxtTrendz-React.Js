import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Products from './components/Products'
import ProductItemDetails from './components/ProductItemDetails'
import Cart from './components/Cart'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import CartContext from './context/CartContext'

import './App.css'

class App extends Component {
  state = {
    cartList: [],
  }

  removeCartItem = id => {
    const {cartList} = this.state
    const updatedCartList = cartList.filter(
      eachCartItem => eachCartItem.id !== id,
    )
    this.setState({cartList: updatedCartList})
  }

  

  removeAllCartItems = () => {
    this.setState({cartList: []})
  }

    const updateSameCartItem = cartList.some(item =>item.id === product.id)
       if(updateSameCartItem===false || cartList.length===0){
         
        this.setState(prevState => ({
        cartList: [...prevState.cartList, product],
      }))
    } else {
      cartList.map(each => {
        if (each.id === product.id) {
          if (each.quantity !== 0) {
            each.quantity += 1
          }
        }
        return each
      })
    }

    
    //   TODO: Update the code here to implement addCartItem
  }

  incrementCartItemQuantity = (id) => {
    const {cartList} = this.state

    const increment = cartList.map(each => {
      if (each.id === id) {
        if (each.quantity !== 0) {
          each.quantity += 1
        }
      }
      return each
    })
    this.setState({cartList: increment})
  }

  decrementCartItemQuantity = (id, newQuantity) => {
   const {cartList} = this.state

    const Dec = cartList.map(each => {
      if (each.id === cartItem.id) {
        if (each.quantity !== 1) {
          each.quantity -= 1
        }
      }
      return each
    })

    this.setState({cartList: Dec})
  }

  render() {
    const {cartList} = this.state

    return (
      <CartContext.Provider
        value={{
          cartList,
          addCartItem: this.addCartItem,
          removeCartItem: this.removeCartItem,
          removeAllCartItems: this.removeAllCartItems,
          incrementCartItemQuantity: this.incrementCartItemQuantity,
          decrementCartItemQuantity: this.decrementCartItemQuantity,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/products" component={Products} />
          <ProtectedRoute
            exact
            path="/products/:id"
            component={ProductItemDetails}
          />
          <ProtectedRoute exact path="/cart" component={Cart} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </CartContext.Provider>
    )
  }
}

export default App

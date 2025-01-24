import { useCartStore } from '@/store/useCartStore'
import { useUIStore } from '@/store/useUIStore'

export function Cart() {
  const { items, removeItem, updateQuantity, getTotal } = useCartStore()
  const { isCartOpen, toggleCart } = useUIStore()

  return (
    <div className={`cart ${isCartOpen ? 'cart--open' : ''}`}>
      <div className="cart__header">
        <h2>Shopping Cart</h2>
        <button onClick={toggleCart} className="cart__close">×</button>
      </div>

      <div className="cart__items">
        {items.map((item) => (
          <div key={`${item.product.id}-${item.selectedColor}`} className="cart__item">
            <img
              src={item.product.image}
              alt={item.product.name}
              className="cart__item-image"
            />
            <div className="cart__item-details">
              <h3>{item.product.name}</h3>
              <div 
                className="cart__item-color"
                style={{ backgroundColor: item.selectedColor }}
              />
              <div className="cart__item-quantity">
                <button
                  onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                >
                  +
                </button>
              </div>
              <button
                onClick={() => removeItem(item.product.id)}
                className="cart__item-remove"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart__footer">
        <div className="cart__total">
          Total: ${getTotal().toFixed(2)}
        </div>
        <button className="button button--primary">
          Checkout
        </button>
      </div>
    </div>
  )
} 
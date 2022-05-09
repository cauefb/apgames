import CartItem from '../CartItem/CartItem';
import { Wrapper } from './Cart.styles';
import { CartItemType } from '../../pages/Home/Home';
import Button from '@mui/material/Button';

type Props = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: string) => void;
};

const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart  }) => {
  const calculateTotal = (items: CartItemType[]) =>
    items.reduce((ack: number, item) => ack + item.amount * item.price, 0);
    console.log(cartItems)
  return (
    <Wrapper>
      <h2>Seu carrinho</h2>
      {cartItems.length === 0 ? <p>Carrinho Vazio</p> : null}
      {cartItems.map(item => (
        <CartItem
          key={item._id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
      
      <h2>Total: R${calculateTotal(cartItems).toFixed(2)}</h2>
      <Button variant="contained">Finalizar compra</Button>
    </Wrapper>
  );
};

export default Cart;
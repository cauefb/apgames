import Button from '@material-ui/core/Button';
// Types
import { CartItemType } from '../../pages/Home/Home';
import { ProductPrice } from './ProductPrice/ProductPrice';
// Styles
import { Wrapper } from '../item/Item.styles';



type Props = {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
};

const Item: React.FC<Props> = ({ item, handleAddToCart }) => (
  <Wrapper>
    <img src={item.imageUrl} alt={item.name} />
    <div>
      <h3>{item.name}</h3>
      {/* <p>{item.description}</p> */}
      {/* <h3>R${item.price}</h3> */}
      <ProductPrice price={item.price}/>
    </div>
    <Button onClick={() => handleAddToCart(item)}>Adicionar ao carrinho</Button>
  </Wrapper>
);

export default Item;
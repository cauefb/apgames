import { Price } from "./ProductPrice.style";


interface IProductPriceProps{
    price: number;
}

export const ProductPrice: React.FC<IProductPriceProps> = (props) => {
    
    const {price} = props;

   
   return(
    
        <Price>
            <span>R$</span><h3>{price}</h3> 
        </Price>
    );
}
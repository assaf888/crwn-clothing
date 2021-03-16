import CustomButtom from '../custom-button/custom-button';
import './cart-dropdown.scss';
import CartItem from '../cart-item/cart-item';

import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const CartDropdown = () => {

    const { cartItems } = useSelector(state => state.cart)
    const dispatch = useDispatch();

    return ( 
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
                }
            </div>
                <CustomButtom>GO TO CHECKOUT</CustomButtom>
        </div>
     );
}
 
export default CartDropdown;
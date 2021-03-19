import CustomButtom from '../custom-button/custom-button';
import './cart-dropdown.scss';
import CartItem from '../cart-item/cart-item';
import { withRouter } from 'react-router-dom'
import { toggleCartHidden } from '../../redux/cart/cart.actions'

import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const CartDropdown = ({ history }) => {

    const { cartItems } = useSelector(state => state.cart)
    const dispatch = useDispatch();

    return ( 
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItems.length ? 
                    cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
                    :
                    <span className="empty-message">Your cart is empty</span>
                }
            </div>
                <CustomButtom onClick={() => {
                    history.push('/checkout');
                    dispatch(toggleCartHidden())
                    }}>GO TO CHECKOUT</CustomButtom>
        </div>
     );
}
 
export default withRouter(CartDropdown);
import CustomButtom from '../custom-button/custom-button';
import './cart-dropdown.scss';

const CartDropdown = () => {
    return ( 
        <div className="cart-dropdown">
            <div className="cart-items" />
                <CustomButtom>GO TO CHECKOUT</CustomButtom>
        </div>
     );
}
 
export default CartDropdown;
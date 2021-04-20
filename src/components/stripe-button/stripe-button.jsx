import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IiF2HKEomOmq122lVHlYtiQVVrNWT4THzYMKPMBKM0vCTcDE0lXyniFjjb8a8ytYUmsvZ00VTcmhn4aofdCuutc00cfcQIsEl';
    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }
    return ( 
        <StripeCheckout 
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
     );
}
 
export default StripeCheckoutButton;
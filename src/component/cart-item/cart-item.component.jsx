import "./cart-item.style.scss";

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={`${name}`}></img>
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="quantity">
          {quantity} x &#8377;{price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;

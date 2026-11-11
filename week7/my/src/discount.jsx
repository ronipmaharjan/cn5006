
import { useState } from 'react';

const DiscountCalculator = ({ productName, price }) => {
  const [discount, setDiscount] = useState('');
  const [finalPrice, setFinalPrice] = useState(null);
  const [error, setError] = useState('');

  const calculateDiscount = () => {
    const discountRate = Number(discount);

    if (
      discount.trim() === '' ||
      !Number.isFinite(discountRate) ||
      discountRate < 0 ||
      discountRate > 100
    ) {
      setError('Please enter a discount between 0 and 100.');
      setFinalPrice(null);
      return;
    }

    const discountedPrice =
      Number(price) - (Number(price) * discountRate / 100);

    setFinalPrice(discountedPrice);
    setError('');
  };

  return (
    <div>
      <h2>{productName}</h2>
      <p>Original Price: £{Number(price).toFixed(2)}</p>

      <label htmlFor="discountRate">
        Enter Discount (%):
      </label>

      <input
        type="number"
        id="discountRate"
        value={discount}
        onChange={(e) => {
          setDiscount(e.target.value);
          setFinalPrice(null);
          setError('');
        }}
      />

      <br /><br />

      <button onClick={calculateDiscount}>
        Calculate Discount
      </button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {finalPrice !== null && (
        <p style={{ color: 'green', fontWeight: 'bold' }}>
          Discounted Price: £{finalPrice.toFixed(2)}
        </p>
      )}
    </div>
  );
};

export default DiscountCalculator;

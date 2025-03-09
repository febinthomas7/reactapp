const FormatPrice = ({ price, discountPercentage, shippingfee }) => {
  const exchangeRate = 82.74;
  const converted = price * exchangeRate;

  const discountedPrice = converted - (converted * discountPercentage) / 100;
  const withoutDiscountedPrice = converted;
  const finalPrice = !discountPercentage
    ? withoutDiscountedPrice
    : discountedPrice;
  return Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 2,
  }).format(shippingfee ? shippingfee : finalPrice);
};

export default FormatPrice;

function Product({ features }) {
  return (
    <ul>
      {features.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export default Product;
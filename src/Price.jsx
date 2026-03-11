export default function Price({ oldPrice, newPrice }) {
  return (
    <div>
      <p>Old Price : <del> {oldPrice}</del></p>
      <p>New Price : {newPrice}</p>
    </div>
  );
}
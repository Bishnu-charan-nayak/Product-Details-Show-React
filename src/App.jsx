import "./App.css";
import ProductTab from "./ProductTab";

function App() {
  return (
    <>
      <ProductTab
        title="Logitech MX Master 3S"
        features={["8000 DPI", "5 Programmable Buttons"]}
        oldPrice="₹12495"
        newPrice="₹8999"
      />

      <ProductTab
        title="Apple Pencil (2nd Gen)"
        features={["Intuitive touch surface", "Designed for iPad Pro"]}
        oldPrice="₹11900"
        newPrice="₹9199"
      />
      <ProductTab
        title="Zebronics zeb-Transformer"
        features={["Intuitive touch surface", "Designed for ipad Pro"]}
        oldPrice="₹1599"
        newPrice="₹899"
      />
      <ProductTab
        title="Portronics Toad 23 Wireless Mouse"
        features={["Wireless Mouse 2.4GHz", "Optical Orientation"]}
        oldPrice="₹599"
        newPrice="₹278"
      />


    </>
  );
}

export default App;

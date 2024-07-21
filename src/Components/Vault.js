import React from "react";
import "../Styles/Vault.css";
const images = [
  "https://www.wearcomet.com/cdn/shop/files/sb_1-min_1100x.jpg?v=1716807770",
  "https://www.wearcomet.com/cdn/shop/files/Crater_Desktop-min_f3646250-bf78-4bd7-beb3-0f06de37e2c7_2000x.jpg?v=1716301668",
  "https://www.wearcomet.com/cdn/shop/files/sb_1-min_1100x.jpg?v=1716807770",
  "https://www.wearcomet.com/cdn/shop/files/Mango_Desktop-min_14a104a2-b9f4-4ae9-8f79-da7e79a0c277_2000x.jpg?v=1716301750",
  "https://www.wearcomet.com/cdn/shop/files/Crater_Desktop-min_f3646250-bf78-4bd7-beb3-0f06de37e2c7_2000x.jpg?v=1716301668",
  "https://www.wearcomet.com/cdn/shop/files/sb_1-min_1100x.jpg?v=1716807770",
  "https://www.wearcomet.com/cdn/shop/files/sb4-min_1100x.jpg?v=1716807769",
  "https://www.wearcomet.com/cdn/shop/files/Crater_Desktop-min_f3646250-bf78-4bd7-beb3-0f06de37e2c7_2000x.jpg?v=1716301668",
  "https://www.wearcomet.com/cdn/shop/files/sb_1-min_1100x.jpg?v=1716807770",
  "https://www.wearcomet.com/cdn/shop/files/Mango_Desktop-min_14a104a2-b9f4-4ae9-8f79-da7e79a0c277_2000x.jpg?v=1716301750",
];
const Vault = () => {
  return (
    <div className="VaultContainer">
      <div className="VaultTopContainer">
        <p style={{}}>| THE VAULT</p>
        <p style={{}}>
          LIMITED QUANTITIES, ONCE A MONTH. NO RESTOCK ONCE SOLD OUT.
        </p>
      </div>
      <div className="VaultEffect">
        <div className="items">
          {images.map((image, index) => (
            <div
              key={index}
              tabIndex="0"
              className="item"
              style={{ backgroundImage: `url(${image})` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Vault;

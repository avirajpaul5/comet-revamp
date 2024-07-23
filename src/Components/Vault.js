import React from "react";
import "../Styles/Vault.css";
import shoe1 from "../Assets/vaultImages/Crater.png";
import shoe2 from "../Assets/vaultImages/Jugnu.png";
import shoe3 from "../Assets/vaultImages/Ludo.png";
import shoe4 from "../Assets/vaultImages/Mango.png";
import shoe5 from "../Assets/vaultImages/Skribble.png";
import shoe6 from "../Assets/vaultImages/Spacebound.png";
import shoe7 from "../Assets/vaultImages/Tuxedo.png";
import shoe8 from "../Assets/vaultImages/santanu.png";

const images = [
  shoe1,
  shoe2,
  shoe3,
  shoe4,
  shoe5,
  shoe6,
  shoe7,
  shoe8,
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

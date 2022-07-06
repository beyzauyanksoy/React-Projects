import React from "react";

function Giris(props) {
  return (
    <React.Fragment>
      <h2>Hoşgeldiniz {props.isim}</h2>
      <button onClick={props.buttonClicked}>Çıkış yap</button>
    </React.Fragment>
  );
}

export default Giris;

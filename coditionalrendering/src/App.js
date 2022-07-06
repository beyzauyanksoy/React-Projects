import React, { useState } from "react";
import "./App.css";
import "./components/Giris.js";
import Giris from "./components/Giris.js";

function App() {
  const [isim, setIsim] = useState("");
  const [hataMesaji, setHataMesaji] = useState("");
  const [girisYapıldi, setGirisYapidi] = useState(false);

  const handleChange = (event) => setIsim(event.target.value);
  const handleSubmit = (isim) => {
    if (isim.length < 6) {
      setHataMesaji("en az 6 karakteri olmalıdır");
    } else {
      setHataMesaji("");
      setGirisYapidi(true);
    }
  };

  return (
    <div className="App">
      <h1>React dersleri</h1>
      {girisYapıldi && <p>giriş yapıldı</p>}
      {girisYapıldi ? (
        <Giris
          isim={isim}
          buttonClicked={() => {
            setGirisYapidi(false);
          }}
        ></Giris>
      ) : (
        <React.Fragment>
          <input
            name="isim"
            placeholder="isminizi girin"
            value={isim}
            onChange={handleChange}
          />
          <button
            onClick={() => {
              handleSubmit(isim);
            }}
          >
            Giriş
          </button>
          <br></br>
          {hataMesaji ? <h4>{hataMesaji}</h4> : <h2>giriş yapınız</h2>}
        </React.Fragment>
      )}
    </div>
  );
}

export default App;

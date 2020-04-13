const StellarSdk = require("stellar-sdk");
const fs = require("fs");
const path = require("path");
const fetch = require("node-fetch");


const pair = StellarSdk.Keypair.random();

const createTestAccount = async () => {
  
    // Creamos nuestro par de llaves
  const secret = pair.secret();
  const publicKey = pair.publicKey();

  return {
    secret,
    publicKey
  };
};

const activeTestAccount = async publicKey => {
  // Solicitamos la activación de nuestra cuenta al friendbot de stellar
  const response = await fetch(
    `https://friendbot.stellar.org?addr=${publicKey}`
  );

  // Mostramos el resultado de la RESPUESTA
  const responseJSON = await response.json();

  return responseJSON;
};

export { createTestAccount, activeTestAccount };
  
  
}

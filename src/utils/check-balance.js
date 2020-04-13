// utils/check-balance.js
const StellarSdk = require("stellar-sdk");
const dotenv = require("dotenv");

dotenv.config();
console.log("despues de dotenv.config:");

const server = new StellarSdk.Server("https://horizon-testnet.stellar.org");

console.log("despues de stellarsdk server:");

const checkBalance = async () => {
  // Cargamos la cuenta a través del sdk de Stellar
  
  console.log("dentro de checkbalance: Public key", process.env.PUBLIC_KEY);
  
  //const account = await server.loadAccount(process.env.PUBLIC_KEY);
  const account = await server.loadAccount("GDSP3DW7A5MOFP67SVBNAHCMPPNCBVKPMHIX6AIFDZPSIXYYBPVNXF5N");

  console.log("Balances for account: GDSP3DW7A5MOFP67SVBNAHCMPPNCBVKPMHIX6AIFDZPSIXYYBPVNXF5N");

  // Checamos cada una de las cuentas y su balance
  account.balances.forEach(balance => {
    console.log("Type:", balance.asset_type, ", Balance:", balance.balance);
  });
};

checkBalance();

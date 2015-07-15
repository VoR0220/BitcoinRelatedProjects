var Client = require('bitcore-wallet-client');
var fs = require('fs');
var BWS_INSTANCE_URL = 'http://localhost:3232/bws/api'

var client = new Client({
  baseUrl: BWS_INSTANCE_URL,
  verbose: false,
});

client.createWallet("My Wallet", "RJ", 2, 2, {network: 'testnet'}, function(err, secret) {
  // Handle err
  console.log('Wallet Created. Share this secret with your copayers: ' + secret);
  fs.writeFileSync('RJ.dat', client.export());
  client.createAddress(function(err, addr){
    fs.writeFileSync('RJaddr.dat', addr);	
  });
});

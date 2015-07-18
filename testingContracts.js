var Consumer    = require('bitcore-channel').Consumer,
    Provider    = require('bitcore-channel').Provider,
    PrivateKey  = require('bitcore').PrivateKey,
    PublicKey   = require('bitcore').PublicKey;




var privKey = new PrivateKey.fromRandom(['testnet']),		//test keys
	pubKey  = new PublicKey(privKey, true),
	refKey  = new PrivateKey.fromRandom(['testnet']);



var prov1	= new Provider({
										network: 			'testnet',
										paymentAddress:      privKey.toAddress()
	});


var con1 	= new Consumer({
										network: 			'testnet',
										providerPublicKey: 	 pubKey,
										providerAddress: 	 privKey.toAddress(),
										refundAddress: 		 refKey.toAddress()
	});

	
	

	console.log(con1);
	console.log(prov1);




var p2p         = require('bitcore-p2p'),
	Peer 	    = p2p.Peer,
	Pool        = p2p.Pool,
	Messages    = p2p.Messages,
    testnetPeer = new Peer({host: '5.9.85.34'}, network: Networks.testnet),
    pool        = new Pool({network: Networks.testnet});

// handle events
testnetPeer.on('ready', function() {
  // peer info
  console.log(peer.version, peer.subversion, peer.bestHeight);
  var message = new Messages.GetAddresses();
  peer.sendMessage(message);
});

testnetPeer.on('addr', function(message) {
  message.addresses.forEach(function(address) {
    // do something
  });
});

// handle events
testnetPeer.on('inv', function(message) {
  // message.inventory[]
});

testnetPeer.on('tx', function(message) {
  // message.transaction
});

testnetPeer.on('addr', function(message) {
  // message.addresses[]
});

testnetPeer.on('disconnect', function() {
  console.log('connection closed');
});

testnetPeer.connect();
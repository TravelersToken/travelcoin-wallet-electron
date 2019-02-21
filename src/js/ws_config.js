var config = {};

// self explanatory, your application name, descriptions, etc
config.appName = 'Travelers Token';
config.appDescription = 'TravelCoin Wallet';
config.appSlogan = 'Lets Build Worlds!';
config.appId = 'travelcoin-1550711133541';
config.appGitRepo = 'https://github.com/travelerstoken/turtle-wallet-electron';

// default port number for your daemon (e.g. TurtleCoind)
config.daemonDefaultRpcPort = 19702;

// wallet file created by this app will have this extension
config.walletFileDefaultExt = 'twl';

// change this to match your wallet service executable filename
config.walletServiceBinaryFilename = 'travel-service';

// version on the bundled service (turtle-service)
config.walletServiceBinaryVersion = "v0.1.1";

// config file format supported by wallet service, possible values:
// ini -->  for turtle service (or its forks) version <= v0.8.3
// json --> for turtle service (or its forks) version >= v0.8.4
config.walletServiceConfigFormat = "json";

// default port number for your wallet service (e.g. turtle-service)
config.walletServiceRpcPort = 4401;

// block explorer url, the [[TX_HASH]] will be substituted w/ actual transaction hash
config.blockExplorerUrl = 'https://explorer.turtlecoin.lol/transaction.html?hash=[[TX_HASH]]';

// default remote node to connect to, set this to a known reliable node for 'just works' user experience
config.remoteNodeDefaultHost = 'travelnode.co';

// remote node list update url, set to null if you don't have one
config.remoteNodeListUpdateUrl = 'https://raw.githubusercontent.com/turtlecoin/turtlecoin-nodes-json/master/turtlecoin-nodes.json';

// fallback remote node list, in case fetching update failed, fill this with known to works remote nodes
config.remoteNodeListFallback = [
  'turtlenode.co:11898',
  'nodes.hashvault.pro:11898',
  'turtle.mine.nu:11898',
];

// your currency name
config.assetName = 'TravelCoin';
// your currency ticker
config.assetTicker = 'TRV';
// your currency address prefix, for address validation
config.addressPrefix = 'TRV';
// standard wallet address length, for address validation
config.addressLength = 98;
// intergrated wallet address length, for address validation
config.integratedAddressLength = 187;

// minimum fee for sending transaction
config.minimumFee = 0.1;
// minimum amount for sending transaction
config.mininumSend = 0.1;
// default mixin/anonimity for transaction
config.defaultMixin = 3;
// to convert from atomic unit
config.decimalDivisor = 100;
// to represent human readable value
config.decimalPlaces = 2;

// obfuscate address book entries, set to false if you want to save it in plain json file.
// not for security because the encryption key is attached here
config.addressBookObfuscateEntries = true;
// key use to obfuscate address book contents
config.addressBookObfuscationKey = '79009fb00ca1b7130832a42de45142cf6c4b7f333fe6fba5';
// initial/sample entries to fill new address book
config.addressBookSampleEntries = [
  {
    name: 'Travelers Token Donation',
    address: 'TRTLuyDrYc89jbX8iFVRAkAQN9hYRhjUC9EqRt1Vg32h94ZeBaT9iqW9u4znzenxbJAQrgw5dRLAHBv8UajiP5CtAZxCkCx9aTnXApin33p1JsSE9Yf6REj97Xruz15D4JtSg1wuqYTmsPj5Geu2kHtBzD8TCsfd5dbdYRsrhNXMGyvtJ61AoZ31EaE',
    paymentId: '',
  }
];
// cipher config for private address book
config.addressBookCipherConfig = {
  algorithm: 'aes-256-gcm',
  saltLenght: 128,
  pbkdf2Rounds: 10000,
  pbkdf2Digest: 'sha512'
};

module.exports = config;

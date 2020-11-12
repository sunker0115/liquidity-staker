var Web3 = require("web3");
//连接到Ganache
var web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/v3/30bf4bface004c04b0ee6fa05753adca'));

var fs = require("fs");
var data = fs.readFileSync("./build/StakingRewardsFactory.json", "utf-8");

//创建合约对象
var contract = new web3.eth.Contract(JSON.parse(data).abi,'0x77Dcfe8904d571CF05e4EedFa81C22c3cB57c444');

//调用合约的方法
contract.methods.deploy('0x1Af77a32A95Dc886C84604869b4B8Adc8264427a',5000000).call().then(console.log);
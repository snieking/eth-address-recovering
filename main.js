const Web3 = require('web3');
const web3 = new Web3();

const input = {
  messageHash:
    '0x1da44b586eb0729ff70a73c326926f6ed5a25f5b056e7f47fbc6e58d86871655',
  v: '0x1c',
  r: '0xb91467e570a6466aa9e9876cbcd013baba02900b8979d43fe208a4a4f339f5fd',
  s: '0x6007e74cd82e037b800186422fc2da167c747ef045e5d18a5f5d4300f8e1a029',
};

console.log(web3.eth.accounts.recover(input));


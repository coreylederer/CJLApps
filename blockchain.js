// Simple blockchain example app 
// Corey lederer 8/8/2018
// Inspired by:  Simply Explained - Savjee
//
const SHA256 = require('crypto-js/sha256');

class Block {
    constructor(block, timestamp, reversible, data, previousHash = '') {
        this.block = block;
        this.timestamp = timestamp;
        this.reversible = reversible;
        this.data = data;
        this.previousHash = previousHash;
        this.currentHash = this.calculateHash();
        this.nonce = 0;
    }

    calculateHash() {
        return SHA256(this.block + this.previousHash + this.timestamp + JSON.stringify(this.data) + this.nonce).toString();
    }

    mineBlock(difficulty) {
        while (this.currentHash.substring(0, difficulty) !== Array(difficulty + 1).join("0")) {
            this.nonce++;
            this.currentHash = this.calculateHash();

        }
        console.log("block mined", this.currentHash);
    }
}

class Blockchain {
    constructor() {
        this.chain = [this.createGenesisBlock()];
        this.difficulty = 5;
    }

    createGenesisBlock() {
        return new Block("-1", "08/08/2018", "Corey's Genesis Block", "Genesis Block", "null previous hash - genesis block");
    }

    getLatestBlock() {
        return this.chain[this.chain.length - 1];
    }

    addBlock(newBlock) {
        newBlock.previousHash = this.getLatestBlock().currentHash;
        newBlock.mineBlock(this.difficulty);
        //newBlock.currentHash = newBlock.calculateHash();
        this.chain.push(newBlock);
    }

    isChainValid() {
        for (let i = 1; i < this.chain.length; i++) {
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i - 1];

            if (currentBlock.currentHash !== currentBlock.calculateHash()) {
                //console.log('current block hash', currentBlock.hash);
                console.log(currentBlock.currentHash);
                console.log('Current block hash !== calculated hash');
                //return false;
            } else {
                //console.log('Current Block Hash: ', currentBlock.currentHash, 'Calculated it is: ', currentBlock.calculateHash());
            }

            if (currentBlock.previousHash !== previousBlock.currentHash) {
                console.log('Current block hash !== Prev block hash');
                return false;
            } else {
                //console.log('Current Block Previous Hash: ', currentBlock.previousHash, 'Previous Block Current Hash: ', previousBlock.currentHash);
            }
        }
        return true;
    }
}

let coreyCoin = new Blockchain();
for (let iLoop = 0; iLoop < 5;) {
    coreyCoin.addBlock(new Block(iLoop, "8/8/2018", "no", { amount: iLoop++, stuff: "Things" }));
    coreyCoin.addBlock(new Block(iLoop, "8/8/2018", "no", { amount: iLoop++, other_stuff: "This other stuff" }));
    coreyCoin.addBlock(new Block(iLoop, "8/8/2018", "no", { amount: iLoop++, other_stuff_er: "This otherer stuff" }));
    coreyCoin.addBlock(new Block(iLoop, "8/8/2018", "no", { amount: iLoop++, not_stuff: "This isn't stuff" }));
    coreyCoin.addBlock(new Block(iLoop, "8/8/2018", "no", { amount: iLoop++, your_stuff: "This is your stuff" }));
    coreyCoin.addBlock(new Block(iLoop, "8/8/2018", "", { amount: iLoop++, boring_stuff: "Boring stuff" }));
    coreyCoin.addBlock(new Block(iLoop, "8/8/2018", "", { amount: iLoop++, sleepy_stuff: "This other stuff will put you to sleep" }));

}

console.log('Is Blockchain Valid?' + coreyCoin.isChainValid());

console.log(JSON.stringify(coreyCoin, null, 3));

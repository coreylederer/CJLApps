 
 const SHA256 = require('crypto-js/sha256');
 
 class Block{
    constructor(block, timestamp, reversible, data, previousHash = ''){
        this.block = block;
        this.timestamp = timestamp;
        this.reversible = reversible;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
    }

    calculateHash(){
        return SHA256(this.block + this.previousHash + this.timestamp + JSON.stringify(this.data)).toString();
    }
}

class Blockchain {
    constructor() {
        this.chain = [this.createGenesisBlock()];

    }

    createGenesisBlock(){
        return new Block(0, "08/08/2018", "Corey's Genesis Block", "NULL");
    }

    getLatestBlock() {
        return this.chain[this.chain.length -1 ];
    }

    addBlock(newBlock){
        newBlock.previousHash = this.getLatestBlock().hash;
        newBlock.hash = newBlock.calculateHash();
        this.chain.push(newBlock);

    }
}

let coreyCoin = new Blockchain();
coreyCoin.addBlock(new Block(1, "8/8/2018", "no", {amount: 1,stuff: "Things"}));
coreyCoin.addBlock(new Block(2, "8/8/2018", "no", {amount: 2,other_stuff: "This other stuff"}));
coreyCoin.addBlock(new Block(3, "8/8/2018", "no", {amount: 3,other_stuff_er: "This otherer stuff"}));
coreyCoin.addBlock(new Block(4, "8/8/2018", "no", {amount: 4,not_stuff: "This isn't stuff"}));
coreyCoin.addBlock(new Block(5, "8/8/2018", "no", {amount: 5,your_stuff: "This is your stuff"}));
coreyCoin.addBlock(new Block(6, "8/8/2018", "", {amount: 6,boring_stuff: "Boring stuff"}));
coreyCoin.addBlock(new Block(7, "8/8/2018", "", {amount: 7,sleepy_stuff: "This other stuff will put you to sleep"}));


console.log(JSON.stringify(coreyCoin, null, 4));

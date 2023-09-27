import { Block } from "./block";

export class Blockchain {
    blockchain: Block[];

    constructor() {
        this.blockchain = [this.createGenesisBlock()];
    }
    createGenesisBlock(): Block {
        return new Block(0, Date.now().toString(), { "data": 'first block on the chain' }, "0");
    }
    getTheLatestBlock() {
        return this.blockchain[this.blockchain.length - 1];
    }
    addNewBlock(newBlock: Block): void {
        newBlock.previousHash = this.getTheLatestBlock().hash;
        newBlock.hash = newBlock.generateHash();

        this.blockchain.push(newBlock);
    }

    // testing the integrity of the chain
    validateChainIntegrity(): boolean {
        for (let i = 1; i < this.blockchain.length; i++) {
            const currentBlock = this.blockchain[i];
            const previousBlock = this.blockchain[i - 1];
            if (currentBlock.hash !== currentBlock.generateHash()) {
                return false;
            }
            if (currentBlock.previousHash !== previousBlock.hash) {
                return false;
            }
        }

        return true;
    }
}

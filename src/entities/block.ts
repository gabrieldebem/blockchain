import { SHA256 } from "crypto-js";

export class Block {
    index: number;
    hash: string;
    previousHash?: string;
    timestamp: string;
    data: object;

    constructor(
        index: number,
        timestamp: string,
        data: object,
        previousHash?: string
    ) {
        this.index = index;
        this.hash = this.generateHash();
        this.timestamp = timestamp;
        this.previousHash = previousHash;
        this.data = data;
    }

    generateHash(): string {
        return SHA256(this.index + this.timestamp + this.previousHash + JSON.stringify(this.data)).toString();
    }
}

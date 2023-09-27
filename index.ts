import { Block } from "./src/entities/block";
import { Blockchain } from "./src/entities/blockchain";

let logCoin = new Blockchain();
console.log("mining logcoin in progress...");
logCoin.addNewBlock(
    new Block(1, "06/04/2022", {
        sender: "Jon Doe",
        recipient: "Jane R",
        quantity: 25
    })
);

logCoin.addNewBlock(
    new Block(2, "08/08/2022", {
        sender: "Mary",
        recipient: "Elena",
        quantity: 34
    })
);

logCoin.addNewBlock(
    new Block(3, "13/08/2022", {
        sender: "Elena",
        recipient: "Mary",
        quantity: 34
    })
);
console.log(JSON.stringify(logCoin, null, 5))
console.log("Is blockchain valid? " + logCoin.validateChainIntegrity());

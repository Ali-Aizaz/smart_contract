# Transactions Smart Contract

This is a smart contract written in Solidity for the Ethereum blockchain. The contract is named `Transactions` and it keeps track of transactions between Ethereum addresses.

## Features

- The contract has a `Transfer` event that is emitted when a new transaction is added to the blockchain. The event includes information about the sender, receiver, amount, message, timestamp, and keyword of the transaction.
- The contract also has a `TransferStruct` struct that stores the same information as the `Transfer` event. An array of `TransferStruct` is used to store all transactions that have been added to the blockchain.
- The contract has three functions: `addToBlockchain`, `getAllTransactions`, and `getTransactionCount`.
  - The `addToBlockchain` function takes in a receiver address, an amount, a message, and a keyword as arguments. It increments the `transactionCount` variable, adds a new `TransferStruct` to the `transactions` array, and emits a `Transfer` event with the transaction details.
  - The `getAllTransactions` function returns all transactions stored in the `transactions` array.
  - The `getTransactionCount` function returns the total number of transactions that have been added to the blockchain.

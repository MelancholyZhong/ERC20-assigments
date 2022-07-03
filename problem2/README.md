# Upgradedable ERC20 project

## What I have implemented

1.Deployed the ERC20 (SimpleToken, ST) contract with transparent proxy to polygon mumbai testnet.

2.Upgraded with a new implementation with SimpleTokenV2 (symbol name: STII).

## How to run

### Deploy on localhost
```
yarn hardhat node
```
then in another terminal
```
yarn hardhat run scripts/upgrade-simpletoken.js --network localhost
```
You will see console log "1,2" as the version is changed

When you run upgrade again, you will see "2,2" since contract is already upgraded to version 2

### To deploy on testnet

```
yarn hardhat deploy --network mumbai
```
(already deployed, initialization will fail)

To upgrade
```
yarn hardhat run scripts/upgrade-simpletoken.js --network mumbai
```
Since the contract has been upgraded, when you run upgrade again, you will see "2,2", since contract is already upgraded to version 2

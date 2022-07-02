const { run } = require("hardhat")

const verify = async (contract, contractAddress, args) => {
    console.log("Verifying contract...")
    try {
        await run("verify:verify", {
            contract: contract,
            address: contractAddress,
            constructorArguments: args,
        })
    } catch (e) {
        if (e.message.toLowerCase().includes("already verified")) {
            console.log("Already Verified!")
        } else {
            console.log(e)
        }
    }
}

module.exports = { verify }

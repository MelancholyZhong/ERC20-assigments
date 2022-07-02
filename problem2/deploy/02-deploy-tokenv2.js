const { getNamedAccounts, deployments, network } = require("hardhat")
const {
    developmentChains,
    INITIAL_SUPPLY,
} = require("../helper-hardhat-config")
const { verify } = require("../utils/verify")

module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    const simpleTokenV2 = await deploy("SimpleTokenV2", {
        from: deployer,
        args: [INITIAL_SUPPLY],
        log: true,
        waitConfirmations: network.config.blockConfirmations || 1,
    })
    log(`simpleTokenV2 deployed at ${simpleTokenV2.address}`)

    if (
        !developmentChains.includes(network.name) &&
        process.env.ETHERSCAN_API_KEY
    ) {
        await verify(
            "contracts/SimpleTokenV2.sol:SimpleTokenV2",
            simpleTokenV2.address,
            [INITIAL_SUPPLY]
        )
    }
}

module.exports.tags = ["all", "token"]

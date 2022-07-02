const { getNamedAccounts, deployments, network } = require("hardhat")
const {
    developmentChains,
    INITIAL_SUPPLY,
} = require("../helper-hardhat-config")
const { verify } = require("../utils/verify")

module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    const simpleToken = await deploy("SimpleToken", {
        from: deployer,
        args: [],
        log: true,
        waitConfirmations: network.config.blockConfirmations || 1,
        proxy: {
            proxyContract: "OpenZeppelinTransparentProxy",
            viaAdminContract: {
                name: "SimpleTokenProxyAdmin",
                artifact: "SimpleTokenProxyAdmin",
            },
        },
    })
    log(`simpleToken deployed at ${simpleToken.address}`)

    if (
        !developmentChains.includes(network.name) &&
        process.env.ETHERSCAN_API_KEY
    ) {
        await verify(
            "contracts/SimpleToken.sol:SimpleToken",
            simpleToken.address,
            []
        )
    }
}

module.exports.tags = ["all", "tokenv1"]

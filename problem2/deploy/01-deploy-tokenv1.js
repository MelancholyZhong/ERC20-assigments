const { getNamedAccounts, deployments, network } = require("hardhat")

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
}

module.exports.tags = ["all", "tokenv1"]

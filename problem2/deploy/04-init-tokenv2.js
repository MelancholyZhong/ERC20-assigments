const { INITIAL_SUPPLY } = require("../helper-hardhat-config")
module.exports = async ({ getNamedAccounts, deployments }) => {
    const { log } = deployments
    const { deployer } = await getNamedAccounts()
    await deployments.execute(
        "SimpleTokenV2",
        {
            from: deployer,
        },
        "initialize",
        INITIAL_SUPPLY
    )
    log("SimpleTokenV2 initialized")
}

module.exports.tags = ["all", "initv2"]

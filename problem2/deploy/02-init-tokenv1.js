const { INITIAL_SUPPLY } = require("../helper-hardhat-config")
module.exports = async ({ getNamedAccounts, deployments }) => {
    const { log } = deployments
    const { deployer } = await getNamedAccounts()
    await deployments.execute(
        "SimpleToken_Implementation",
        {
            from: deployer,
        },
        "initialize",
        INITIAL_SUPPLY
    )
    log("SimpleToken initialized")
}

module.exports.tags = ["all", "initv1"]

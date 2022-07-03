const { INITIAL_SUPPLY } = require("../helper-hardhat-config")
const { developmentChains } = require("../helper-hardhat-config")
const { verifyv1 } = require("../utils/verifyv1")

module.exports = async ({ getNamedAccounts, deployments }) => {
    const { log } = deployments
    const { deployer } = await getNamedAccounts()

    const simpleToken_Implementation = await ethers.getContract(
        "SimpleToken_Implementation"
    )

    if (
        !developmentChains.includes(network.name) &&
        process.env.ETHERSCAN_API_KEY
    ) {
        await verifyv1(simpleToken_Implementation.address, [])
    }

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

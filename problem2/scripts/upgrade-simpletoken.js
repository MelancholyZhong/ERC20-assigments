const { ethers } = require("hardhat")

async function main() {
    const simpleTokenProxyAdmin = await ethers.getContract(
        "SimpleTokenProxyAdmin"
    )
    const transparentProxy = await ethers.getContract("SimpleToken_Proxy")

    const simpleTokenV2 = await ethers.getContract("SimpleTokenV2")
    const upgradeTx = await simpleTokenProxyAdmin.upgrade(
        transparentProxy.address,
        simpleTokenV2.address
    )
    await upgradeTx.wait(1)

    console.log("now upgraded to simple token version2 with simbol STII")
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })

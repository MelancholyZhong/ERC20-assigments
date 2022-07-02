import { ethers } from "./ethers-5.6.esm.min.js"
import { abi, contractAddress } from "./constants.js"

const connectButton = document.getElementById("connectButton")
const mintButton = document.getElementById("mintButton")
const refreshBlanceButton = document.getElementById("refreshBalance")
connectButton.onclick = connect
mintButton.onclick = mintNewToken
refreshBlanceButton.onclick = getBalance
let account

function storeAccount(_account) {
    account = _account
}

async function connect() {
    if (typeof window.ethereum !== "undefined") {
        window.ethereum
            .request({
                method: "eth_requestAccounts",
            })
            .then((result) => {
                storeAccount(result[0])
                console.log(account)
            })
        connectButton.innerHTML = "connected"
    } else {
        connectButton.innerHTML = "No metamask!"
    }
}

async function getBalance() {
    if (typeof window.ethereum !== "undefined") {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
        const contract = new ethers.Contract(contractAddress, abi, signer)
        try {
            const transactionResponse = await contract.balanceOf(account)
            document.getElementById(
                "balance"
            ).innerHTML = `Current Blance: ${ethers.utils.formatEther(
                transactionResponse
            )}`
        } catch (error) {
            console.log(error)
        }
    }
}

async function mintNewToken() {
    const amount = document.getElementById("tokenAmount").value
    if (typeof window.ethereum !== "undefined") {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
        const contract = new ethers.Contract(contractAddress, abi, signer)
        try {
            await contract.mint(account, ethers.utils.parseEther(amount))
        } catch (error) {
            console.log(error)
        }
    }
}

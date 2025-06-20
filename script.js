
async function connectWallet() {
    if (typeof window.ethereum !== 'undefined') {
        const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        alert("Connected: " + accounts[0]);
    } else {
        alert("MetaMask not found");
    }
}

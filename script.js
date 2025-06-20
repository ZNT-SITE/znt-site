
async function connectWallet() {
    if (window.ethereum) {
        try {
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            alert("Wallet connected!");
        } catch (error) {
            alert("Connection rejected.");
        }
    } else {
        alert("MetaMask not found!");
    }
}

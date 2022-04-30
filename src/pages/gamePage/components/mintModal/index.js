import './index.css'
import {utils} from "near-api-js";

export default function MintModal() {
    const mintNFT = async () => {
        await window.contract.nft_mint(
            {
                token_type: 'LionGold',
            },
            300000000000000, // attached GAS (optional)
            utils.format.parseNearAmount("1")
        );
    };

    return (
        <div className="mint-modal-background">
            <div className="mint-modal-wrapper">
                <div className="mint-modal">
                    <img
                        className="mint-modal-nft"
                        src="https://ipfs.io/ipfs/bafkreiebcaejfxzbufngzqzo5ox2e7i2lsxpbzrnc65hggzpkdeozyjhxi"
                        alt="Gold Lion NFT Image"
                    />
                    <p className="nft-description">
                        Congrats! You have upgraded Lion lvl 2 so you can mint your
                    </p>
                    <p className="nft-name">Top Support NFT</p>
                    <button onClick={mintNFT}>Mint</button>
                </div>
            </div>
        </div>
    )
}
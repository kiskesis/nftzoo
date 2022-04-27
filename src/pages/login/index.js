import 'regenerator-runtime/runtime'
import React, {useEffect, useState} from 'react'

import './index.css'
import {login} from "../../utils/utils";
import {useNavigate} from "react-router-dom";
import Loading from "../../components/loading";

export default function Login() {
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()
    useEffect(() => {
        if (window.walletConnection.isSignedIn()) {
            checkToken()
        }
    }, [])

    const handleLogin = async () => {
        await login()
        await checkToken()
    }

    const checkToken = async () => {
        setIsLoading(true)
        const hasToken = await window.contract.check_token();
        setIsLoading(false)
        navigate(hasToken ? "/select-animal" : "/mint")
    }

    return (
        <main>
            <h1>Welcome to NFT Zoo!</h1>
            <p style={{textAlign: 'center'}}>
                This is a volunteer project the main goal is to help Ukrainian zoos with donations and allow getting some fun and NFT to helpers
            </p>
            <p style={{textAlign: 'center'}}>
                <button onClick={handleLogin}>Sign in</button>
            </p>
            <p>
                An application contains that parts:
            </p>
            <ol>
                <li>Mint NFT if you don't have one. This NFT will be your character(animal) that has a link to the real-life animal from Ukrainian Zoo</li>
                <li>Select your NFT that you want to help and upgrade</li>
                <li>Buy food and feed your animal(all money from food going to zoos) and upgrade animal level!</li>
                <li>By updating your level you will have some buns.</li>
                <li>Have fun and help Ukrainian zoos!</li>
            </ol>
            <p>
                Go ahead and click the button below to try it out:
            </p>
            {isLoading && <Loading />}
        </main>
    )
}

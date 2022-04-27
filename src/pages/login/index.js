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
            <h1>Welcome to NEAR!</h1>
            <p>
                To make use of the NEAR blockchain, you need to sign in. The button
                below will sign you in using NEAR Wallet.
            </p>
            <p>
                By default, when your app runs in "development" mode, it connects
                to a test network ("testnet") wallet. This works just like the main
                network ("mainnet") wallet, but the NEAR Tokens on testnet aren't
                convertible to other currencies – they're just for testing!
            </p>
            <p>
                Go ahead and click the button below to try it out:
            </p>
            <p style={{textAlign: 'center', marginTop: '2.5em'}}>
                <button onClick={handleLogin}>Sign in</button>
            </p>
            {isLoading && <Loading />}
        </main>
    )
}

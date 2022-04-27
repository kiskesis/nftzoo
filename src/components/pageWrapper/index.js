import 'regenerator-runtime/runtime'
import React, {useEffect} from 'react'

import './index.css'
import {logout} from "../../utils/utils";
import {useLocation, useNavigate} from "react-router-dom";
import Loading from "../loading";
import SupportUkraine from '../../assets/support-ukraine.png';

export default function PageWrapper({ children, isLoading }) {
    const navigate = useNavigate()
    const { pathname } = useLocation();
    useEffect(() => {
        const checkToken = async () => {
            const hasToken = await window.contract.check_token();
            if (!hasToken && pathname !== "/mint") {
                navigate("/mint")
            }

            if (hasToken && pathname === "/mint") {
                navigate("/select-animal")
            }
        }
        if (window.walletConnection.isSignedIn()) {
            checkToken()
        } else {
            navigate("/")
        }
    }, [])

    return (
        <div className="page-wrapper">
            <header className="header">
                <img
                    className="header-logo"
                    src={SupportUkraine}
                    alt=""
                />
                <button
                    className="link"
                    style={{float: 'right', height: '100%'}}
                    onClick={logout}
                >
                    Sign out
                </button>
            </header>
            {children}
            {isLoading && <Loading />}
        </div>
    )
}

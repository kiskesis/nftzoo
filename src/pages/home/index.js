import 'regenerator-runtime/runtime'
import React, {useEffect, useState} from 'react'

import './index.css'
import Login from "../login";
import SelectAnimalPage from "../selectAnimalPage";
import {utils} from "near-api-js";
import Mint from "../mint";

export default function Home() {
    const [isLoading, setIsLoading] = useState(true)
    const [hasToken, setHasToken] = useState(true)

    useEffect(() => {

    }, [])

    if (isLoading) {
        return (
            <div>...Loading</div>
        )
    }

    return hasToken ? <SelectAnimalPage /> : <Mint />
}

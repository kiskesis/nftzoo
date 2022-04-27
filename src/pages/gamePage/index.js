import React, {useEffect, useState} from 'react'

import './index.css'
import AnimalCharacter from "./components/animalCharacter";
import PageWrapper from "../../components/pageWrapper";
import {useInterval} from "../../utils/hooks";
import Food from "./components/food";
import { utils } from "near-api-js";
import Experience from "./components/experience";

export default function GamePage() {
    const [isLoading, setIsLoading] = useState(true)
    const [eating, setEating] = useState(false)
    const [eatingTimes, setEatingTimes] = useState(0)
    const [foodInput, setFoodInput] = useState(0)
    const [userBalance, setUserBalance] = useState(0)
    const [foodCount, setFoodCount] = useState(0)
    const [exp, setExp] = useState(0)

    useEffect(() => {
        const getUserBalance = async () => {
            window.balance = await window.account.getAccountBalance()
            setUserBalance(utils.format.formatNearAmount(window.balance.available));
        }
        const getAttributes = async () => {
            const card_attr = await window.contract.get_attributes();
            setAttrs(card_attr)
            setIsLoading(false)
        }
        getUserBalance()
        getAttributes()
    }, [])

    useEffect(() => {
        if (eatingTimes === 11) {
            // setFoodCount(foodCount - 1)F
        }
    }, [eatingTimes])

    useInterval(() => {
        setEating(!eating)
        setEatingTimes(eatingTimes + 1)
    }, eatingTimes && eatingTimes <= 10 ? 600 : null)

    const setAttrs = (attrs) => {
        setFoodCount(attrs.food)
        if (exp === 40 && attrs.experience === 50) {
            alert('Aha! Your Lion has been upgraded to LVL 2! Congrats!')
        }
        setExp(attrs.experience)
    }

    const feedLion = async () => {
        setIsLoading(true)
        const card_attr = await window.contract.feed_lion();
        console.log('card_attr', card_attr);
        setEatingTimes(1)
        setAttrs(card_attr)
        setIsLoading(false)
    }

    const handleFoodInputChange = (e) => {
        setFoodInput(e.target.value)
    }

    const buyFood = async () => {
        setIsLoading(true)
        const contractFoodCount = await window.contract.buy_food(
            {
                token_id: window.accountId + "-lion-animal",
            },
            300000000000000, // attached GAS (optional)
            utils.format.parseNearAmount(foodInput || "1")
        );
        setIsLoading(false)
        setFoodCount(contractFoodCount)
    }

    const level = exp >= 50 ? 2 : 1

    return (
        <PageWrapper isLoading={isLoading}>
            <div className="game-page">
                <div className="character-panel">
                    <AnimalCharacter eating={eating} />
                    <div className="animal-info">
                        <h2>{`LVL: ${level}`}</h2>
                        <h2>Name: Lion</h2>
                        <h2>Type: Chordates</h2>
                        <h2>Class: Mammals</h2>
                        <h2>Order: Predatory</h2>
                        <h2>City: Kharkiv</h2>
                        <a href="https://zoo.kharkov.ua/zhivotnye-en/lev">Read More</a>
                    </div>
                </div>
                <div className="items-panel">
                    <Experience exp={exp} />
                    <div className="food-row">
                        <div className="food-count">{foodCount} X</div>
                        <Food eatingTimes={eatingTimes} />
                    </div>
                    <div className="character-buttons">
                        <div className="donation-row">
                            <label htmlFor="donation">Donation:</label>
                            <input
                                autoComplete="off"
                                onChange={handleFoodInputChange}
                                defaultValue={foodInput}
                                id="donation"
                                max={userBalance}
                                min="0"
                                step="1"
                                type="number"
                            />
                            <span title="NEAR Tokens">Ⓝ</span>
                        </div>
                        <button onClick={buyFood}>Buy food</button>
                        <button disabled={foodCount === 0} onClick={feedLion}>Feed Lion</button>
                    </div>
                </div>
            </div>
            <div className="instruction">
                <p>1. Buy food (you can select the count of food in donation) all money goes to Ukraine, Kharkiv's zoo</p>
                <p>2. Feed your lion, get the experience of NFT</p>
                <p>3. When you will up 50 experience you will be able to claim Top Supporter NFT</p>
                <p>4. Buy more food just to support Ukrainian zoos</p>
            </div>
        </PageWrapper>
    )
}

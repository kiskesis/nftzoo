import React from 'react'
import './index.css'
import AnimalCard from "./components/AnimalCard";
import PageWrapper from "../../components/pageWrapper";

export default function SelectAnimalPage() {
    return (
        <PageWrapper>
            <div className="select-animal-page">
                <h2>Your animals:</h2>
                <AnimalCard img="https://ipfs.io/ipfs/bafkreihdfouh6pulmzmx4nlb653q5vmkwgbqegzf37vavf6lyubdtavyom" name="Lion" />
            </div>
        </PageWrapper>
    )
}

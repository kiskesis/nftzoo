import React from 'react'
import './index.css'
import {useNavigate} from "react-router-dom";

export default function AnimalCard({ img, name }) {
    const navigate = useNavigate()
    const onClick = () => {
        navigate('/game/lion')

    }
    return (
        <div className="animal-card" onClick={onClick}>
            <img
                src={img}
                alt="animal image"
            />
            <div className="card-hover">
                {name}
            </div>
        </div>
    )
}

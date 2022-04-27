import 'regenerator-runtime/runtime'
import React, {useEffect, useState} from 'react'

import './index.css'
import LionEats from '../../assets/LionEats.png'
import Lion from '../../assets/Lion.png'
import './index.css'

export default function AnimalCharacter({ eating }) {
    const [img, setImg] = useState(Lion)
    useEffect(() => {
        setImg(eating ? LionEats : Lion)
    }, [eating])
    return (
        <div className="animal-card">
            <img
                src={img}
                alt="animal image"
            />
        </div>
    )
}

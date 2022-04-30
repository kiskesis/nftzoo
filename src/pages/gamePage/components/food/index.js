import 'regenerator-runtime/runtime'
import React, {useEffect, useState} from 'react'

import './index.css'
import FullFood from '../../assets/Food.svg'
import First from '../../assets/First.svg'
import Second from '../../assets/Second.svg'
import Third from '../../assets/Third.svg'
import Fourth from '../../assets/Fourth.svg'
import Fifth from '../../assets/Fifth.svg'

export default function Food({ eatingTimes }) {
    const [img, setImg] = useState(FullFood)

    useEffect(() => {
        switch (eatingTimes) {
            case 1:
                setImg(FullFood)
                break;
            case 2:
                setImg(First)
                break;
            case 4:
                setImg(Second)
                break;
            case 6:
                setImg(Third)
                break;
            case 8:
                setImg(Fourth)
                break;
            case 10:
                setImg(Fifth)
                break;
            default:
                break;
        }
    }, [eatingTimes])

    return (
        <div className="animal-food">
            <img
                src={img}
                className="animal-food-img"
                alt="animal food image"
            />
        </div>
    )
}

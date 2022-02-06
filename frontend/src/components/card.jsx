import React, {useEffect, useState} from "react";

import './style/card.css'

import { VerifyTag } from "../services/userMethods";

export default props => {

    const [tag, setTag] = useState()
    useEffect(async () => {
        props.tags ? setTag(await VerifyTag(props.tags)) : setTag(true)
    }, [])

    const getIcon = () => {
        return (
            <>{props.icon}</>
        )
    }

    return (
        <>
            {tag ?
                <a className='col-lg-3 col-6 pointer-event cardMaxWidth' href={`./relatorios/${props.link || props.name}`}>
                    <div className={`small-box bg-${props.color}`}>
                        <div className='inner'>
                            <h3>{props.name}</h3>
                            <p>{props.description}</p>
                        </div>
                        <div className='icon'>
                            {getIcon()}
                        </div>
                        <span className='small-box-footer'>

                        </span>
                    </div>
                </a>
                : null
            }
        </>
    )
}

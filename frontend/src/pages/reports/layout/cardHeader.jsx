import React, { useState, useEffect } from 'react'

import { VerifyTag } from '../../../services/userMethods'

export default function CardHeader(props) {

    const [element, setElement] = useState(false)

    useEffect(async () => {
        await setElement(
            await props.abas.map(aba => {
                if (aba[2] != "") {
                    let res = VerifyTag(aba[2])

                    console.log(res)

                    // if (res) {
                    //     return <li key={aba[1]} className="nav-item"><a className={`nav-link ${aba[3] ? "active" : null}`} href={`#${aba[1]}`} data-toggle='tab'>{aba[0]}</a></li>
                    // }
                } else {
                    return <li key={aba[1]} className="nav-item" > <a className={`nav-link ${aba[3] ? "active" : null}`} href={`#${aba[1]}`} data-toggle='tab'>{aba[0]}</a></li >
                }
            })
        )
    }, [])

    return (
        <div className='card-header p-2'>
            <ul className='nav nav-pills' style={{ fontSize: "1.2em" }}>
                {
                    element
                }
            </ul>
        </div>
    )
}
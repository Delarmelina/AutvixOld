import React, { useState, useEffect } from 'react'

import TitlePage from './titlePage'

import { VerifyTag } from '../../services/userMethods'

export default function Content(props) {

    const [tag, setTag] = useState(false)
    useEffect(async () => {
        if (props.tags) {
            if (await VerifyTag(props.tags)) {
                setTag(true)
            } else {
                setTag(false)
                window.location.href = "/"
            }
        } else setTag(true)
    }, [])


    return (
        <>
            {tag ?
                <div className='content-wrapper'>
                    <TitlePage title={props.title} />

                    <section className='content'>
                        <div className='content-fluid'>
                            {props.children}
                        </div>
                    </section>
                </div>
                : null}
        </>
    )
}
import { VerifyTag } from '../services/userMethods'

import { useState, useEffect } from 'react'

export default function SidebarItem(props) {

    const [tag, setTag] = useState()

    const getIcon = () => {
        return (
            <>
                {props.icon}
            </>
        )
    }

    useEffect(() => {
        if (props.tag) {
            VerifyTag(props.tag)
                .then(res => {
                    if (res) {
                        setTag(true)
                    }
                })
        }
    }, [])

    return (
        <>
            {tag || !props.tag ?
                <li className="nav-item">
                    <a href={props.link || `/${props.title}`} className="nav-link">
                        {getIcon()}
                        <p className='ml-3 h5'>
                            {props.title}

                            {props.new ? <span className="right badge badge-danger">Novo</span> : null}
                            {props.after ? <span className="right badge badge-warning">Breve</span> : null}

                        </p>
                    </a>
                </li>
                : null}
        </>
    )
}

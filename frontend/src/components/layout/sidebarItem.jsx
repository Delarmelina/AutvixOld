import { useState, useEffect } from 'react'

import { VerifyTag } from '../../services/userMethods'

export default function SidebarItem(props) {

    const [tag, setTag] = useState()
    useEffect(async () => {
        props.tag ? setTag(await VerifyTag(props.tag)) : setTag(true)
    }, [])

    const getIcon = () => {
        return (
            <>{props.icon}</>
        )
    }

    return (
        <>
            {tag ?
                <li className="nav-item">
                    <a href={`../../${props.link}` || `../../${props.title}`} className="nav-link">
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

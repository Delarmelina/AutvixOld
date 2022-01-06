import react from "react"

import * as FaIcon from "react-icons/fa"
import { icons } from "react-icons/lib"

export default props => {     

    const getIcon = () => {
        return (
            <>
            {props.icon}
            </>
        )
    }

    return (
        <li className="nav-item">
            <a href={`/${props.link}`} className="nav-link">
                {getIcon()}
                <p className='ml-3 h5'>
                    {props.title}
                    
                    {props.new ? <span className="right badge badge-danger">Novo</span> : null}
                    {props.after ? <span className="right badge badge-warning">Breve</span> : null}
                    
                </p>
            </a>
        </li>
    )
}
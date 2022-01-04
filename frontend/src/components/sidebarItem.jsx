import react from 'react';

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
            <a href={props.link || `/${props.title}`} className="nav-link">
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

import React from 'react'

export default function CardHeader(props) {

    return (
        <div className='card-header p-2'>
            <ul className='nav nav-pills' style={{ fontSize: "1.2em" }}>
                {
                    props.abas.map(aba => {
                        return <li key={aba[1]} className='nav-item'><a className='nav-link' href={`#${aba[1]}`} data-toggle='tab'>{aba[0]}</a></li>
                    })
                }
            </ul>
        </div>
    )
}
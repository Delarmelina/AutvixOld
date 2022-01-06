import TitlePage from './titlePage'

export default function content(props) {
    return (
        <div className='content-wrapper'>
            <TitlePage title={props.title} />

            <section className='content'>
                <div className='content-fluid'>
                    {props.children}
                </div>
            </section>
        </div>
    )
}
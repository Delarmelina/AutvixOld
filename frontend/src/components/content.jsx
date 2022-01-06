import TitlePage from './titlePage'

export default props => (
    <div className='content-wrapper'>
        <TitlePage title={props.title} />

        <section className='content'>
            <div className='content-fluid'>
                {props.children}
            </div>
        </section>
    </div>
)
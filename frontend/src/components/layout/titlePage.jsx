import React from "react";

export default function titlePage(props) {
    return (
        <section className='content-header'>
            <div className='container-fluid'>
                <div className='row mb-1 pb-2 pt-2' style={{ backgroundImage: "linear-gradient(to right, darkgray , gray)", boxShadow: "10px 5px 5px #000000" }}>
                    <div className='col-sm-6'>
                        <h1 style={{ fontSize: "2em", color:"black"}}> {props.title}</h1>
                    </div>
                </div>
            </div>

            {/* <div className='border border-white'>
            </div> */}
        </section>
    )
}
import React from "react";

import Content from '../../components/layout/content'
import AllCards from './allCards'

export default function Reports() {

    return (
        <Content title='Relatórios' >
            <div className='row justify-content-end'>
                {/* <CreateNewReport /> */}
            </div>
            <div className='row justify-content-around'>

                <AllCards />
            
            </div>
        </Content>
    );
}
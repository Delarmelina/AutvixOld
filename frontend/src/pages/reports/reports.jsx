import React from "react";

import Content from '../../components/content'
import Card from '../../components/card'

import * as FaIcon from 'react-icons/fa'

export default props => {

    return (
        <Content title='Relatórios' >
            <div className='row justify-content-between'>
                <Card
                    title='RDV'
                    description='Relatorio de Viagem'
                    color='success'
                    icon={<FaIcon.FaPlane />} />
                <Card
                    title='Reembolso'
                    description='Solicitação de Reembolso'
                    color='info'
                    icon={<FaIcon.FaCoins />} />
                <Card
                    title='RDO'
                    description='Relatorio Diário de Obra'
                    color='danger'
                    icon={<FaIcon.FaCalendarAlt />} />
                <Card
                    title='Sugestões'
                    description='Sugestões de Melhorias'
                    color='info'
                    link='sugestoes'
                    icon={<FaIcon.FaChartLine />} />
            </div>
        </Content>
    );
}
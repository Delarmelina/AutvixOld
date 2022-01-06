import React from "react";

import Card from '../../common/components/card'
import Content from '../../common/components/content'

import * as FaIcon from 'react-icons/fa'

export default props => (
    <Content title='Relatórios'>
        <div className='row'>
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
)
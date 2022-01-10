import React from "react";

import Content from '../../components/content'
import Card from '../../components/card'

import * as FaIcon from 'react-icons/fa'

export default function Reports() {

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
                    color='lime'
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
                <Card
                    title='Ocorrências'
                    description='Sugestões de Melhorias'
                    color='gray'
                    link='sugestoes'
                    icon={<FaIcon.FaChartLine />} />
                <Card
                    title='Relatório SGQ'
                    description='Sugestões de Melhorias'
                    color='orange'
                    link='sugestoes'
                    icon={<FaIcon.FaChartLine />} />
                <Card
                    title='Sugestões'
                    description='Relatório de Paganento'
                    color='blue'
                    link='sugestoes'
                    icon={<FaIcon.FaChartLine />} />
                <Card
                    title='Relatorio de Teste'
                    description='Relatório de Paganento'
                    color='warning'
                    link='sugestoes'
                    icon={<FaIcon.FaChartLine />} />
            </div>
        </Content>
    );
}
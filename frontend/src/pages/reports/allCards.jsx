import React from "react";

import Card from "../../components/card"

import * as FaIcon from 'react-icons/fa'

export default function Reports() {

    const list = [
        { name: "RDV", description: "Relatório de Viagem", color: "cyan", link: "rdv", tags: null, icon: <FaIcon.FaPlane /> },
        { name: "RDO", description: "Relatório de Horas", color: "dark", link: "rdo", tags: ['Planejamento', 'RH'], icon: <FaIcon.FaPen /> },
        { name: "RH", description: "Apontamento de Horas", color: "purple", link: "rh", tags: ['RH'], icon: <FaIcon.FaClock /> },
        { name: "SGQ", description: "Sugestão de Melhoria", color: "light", link: "sgq", tags: ['Engenharia I'], icon: <FaIcon.FaUserGraduate /> },
        { name: "OC", description: "Solicitação de compra", color: "yellow", link: "oc", tags: ['Administrativo'], icon: <FaIcon.FaMoneyCheck /> },
        { name: "Reembolso", description: "Solicitação de pequenos reembolsos", color: "success", link: "reembolso", tags: ['Engenharia I', 'Engenharia II'], icon: <FaIcon.FaMoneyBill /> },
        { name: "Denúncia", description: "Denúncia de atos não-trabalhistas", color: "danger", link: "denuncia", tags: ['RH', 'Planejamento'], icon: <FaIcon.FaExclamationTriangle /> },
        { name: "Reserva de Carros", description: "Solicitar reserva de carro", color: "blue", link: "carros", tags: ['RH', 'Planejamento'], icon: <FaIcon.FaCar /> },
    ]

    return (
        <>
            {
                list.map(card => {
                    return (
                        <Card key={card.link}
                            name={card.name}
                            description={card.description}
                            color={card.color}
                            link={card.link}
                            tags={card.tags}
                            icon={card.icon} />
                    )
                })
            }
        </>
    )
}
import React from "react"

import Content from "../../../components/content"
import FormModel from "../../../components/forms/formModel"
import FormField from "../../../components/forms/formField"

export default props => {

    return (
        <Content title="Models">
            <FormModel>
                <FormField title="Texto" type="text" />
                <FormField title="Data" type="date" />
                <FormField title="Id" type="number" />
                <FormField title="checkbox" type="checkbox" />
                <FormField title="time" type="time" />
                <FormField title="email" type="email" />
                <FormField title="file" type="file" />
                <FormField title="radio" type="radio" />
                <FormField title="mes" type="month" />
                <FormField title="tel" type="tel" />
            </FormModel>
        </Content>
    )
}
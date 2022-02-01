import React from "react";

import DualListBox from 'react-dual-listbox'

class Widget extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            selected: [],
        };

        this.props.tags.map(tag => {
            this.props.options.map(option => {
                return tag === option.label ? this.state.selected.push(option.value) : null
            })
            return null
        })
    }

    onChange = (selected, selection) => {
        this.setState({ selected })

        const tags = []
        selected.map(tag => {
            this.props.options.map(option => {
                return tag === option.value ? tags.push(option.label) : null
            })
            return null
        })

        this.props.setSelected(tags)
    }

    render() {
        const { selected } = this.state
        
        return (
            <DualListBox
                options={this.props.options}
                selected={selected}
                onChange={this.onChange}
            />
        )
    }
}

export default Widget
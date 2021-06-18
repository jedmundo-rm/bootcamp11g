import React from 'react';

class SideBarButton extends React.Component {
    constructor(props) {
        super(props);

        this.props = props
    }

    render() {
        return (
            <li className="btn btn-sidebar">
                <span>
                    {this.props.icon}
                </span>
                <span>
                    {this.props.text}
                </span>
            </li>   
        )
    }
}

export default SideBarButton;
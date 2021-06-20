import React from 'react';

class AsideCards extends React.Component {
    constructor(props) {
        super(props);

        this.props = props
    }

    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <main>
                        {this.props.children}
                    </main>
                </div>
            </div>   
        )
    }
}

export default AsideCards;
import React from 'react'

class HeaderSearch extends React.Component {
    render() {
        return (
            <input type="search" className="mx-2 form-control  d-none d-md-block" placeholder="Search..."/>
        )
    }
}

export default HeaderSearch
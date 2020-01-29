import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer: React.FC = () => {
    return (
        <div className="footer">
            <h2 className="footer-text">&copy; 2020 DevNetwork. All Rights Reservered</h2>
            <NavLink to="/help" className="help-sign">?</NavLink>
        </div>
    )
}

export default Footer

import React from 'react'

const Footer = () => {
    return (
        <>
            <div className="d-flex container text-white justify-content-center">
                <footer>
                    &copy; {new Date().getFullYear()} - Elnatan Souza
                </footer>
            </div>
        </>
    )
}
export default Footer

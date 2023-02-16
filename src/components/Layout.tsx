import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = (props: { children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined }) => {
    return (
        <div>
            <Header/>
                { props.children }
            <Footer/>
        </div>
    )
}

export default Layout
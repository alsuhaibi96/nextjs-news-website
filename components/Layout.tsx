import PropTypes from 'prop-types'
import { ReactNode } from 'react'
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";


type LayoutProps = {
    children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
    return (
       <>
       <Nav/>
    <main className="container mx-auto">
            {children}
        </main>
        <Footer/>
       </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout 
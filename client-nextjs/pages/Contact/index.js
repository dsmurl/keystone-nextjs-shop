import React from 'react'
import Header from "../../components/Header";
import Footer from "../../components/Footer";

class AboutPage extends React.Component {

    render = () => (
        <div>
            <Header page="Contact"/>
            <h3>Contact Page</h3>
            <p>  Contact Me!</p>
            <Footer />
        </div>
    )
}

export default AboutPage;

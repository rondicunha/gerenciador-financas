import React from "react";
import BackButton from "../components/backButton";
import { Link } from "react-router-dom";
import Form from "../components/form";
import Footer from "../components/footer";

const Cadastro = () => {

    return (
        <div>
            <Link to="/">
                <BackButton />
            </Link>
            <Form />
            <Footer/>
        </div>
    );
}

export default Cadastro;
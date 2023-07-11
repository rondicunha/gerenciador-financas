import React from "react";
import BackButton from "../components/backButton";
import { Link } from "react-router-dom";
import Form from "../components/form";

const Cadastro = () => {

    return (
        <div>
            <Link to="/">
                <BackButton />
            </Link>
            <Form />
        </div>
    );
}

export default Cadastro;
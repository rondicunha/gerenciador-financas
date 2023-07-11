import React from "react";
import BackButton from "../components/backButton";
import { Link } from "react-router-dom";

const Cadastro = () => {

    return (
        <div>
            <Link to="/">
                <BackButton />
            </Link>
        </div>
    );
}

export default Cadastro;
import React from "react";
import './NotFound.css'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return <div>
            <h1 className="notFoundTitle">Dirección no encontrada</h1>
        <Link to="/" className="volver">
            Volver
        </Link>
        </div>;

};

export default NotFound;

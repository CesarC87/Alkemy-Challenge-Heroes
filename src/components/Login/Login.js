import React , {useState} from "react";
import { Formik, Field, ErrorMessage, Form } from "formik";
import { Link } from "react-router-dom";
import "./Login.css"


const Login = () => {
    const [success, setSuccess] = useState(false)
    const [login, setLogin] = useState(false)
    const [fail, setFail] = useState(false)
  return (
    <>
    <h1>SuperHero App!</h1>
      <Formik 
      initialValues={{
          email: '',
          password: ''
      }}
      validate={(inputs) => {
        let errores = {};
        if(!inputs.email){
            errores.email = "Por favor, ingrese una dirección de email"            
        }
        if(!inputs.password){
            errores.password = "Por favor, ingrese una password"
          }
        return errores;  
      } }
      onSubmit={(inputs) => {
          const email = process.env.REACT_APP_USER_EMAIL;
          const pass = process.env.REACT_APP_USER_PASS;         
          if(inputs.email === email & inputs.password === pass){
              setSuccess(true)
              setLogin(true)       
              setFail(false)       
          }else {
              setFail(true)
          }
          
      }}>
        {(formikProps) => (
            !login &&
          <Form className="formulario">
            <div>
              <label htmlFor="email">Ingresá tu email</label>
              <Field
                type="email"
                name="email"
                id="email"
                placeholder="john@doe.com"                
              ></Field>
              <ErrorMessage name="email" component={() => (
                  <div className="emailError">{formikProps.errors.email}</div>
              )}/>
              
            </div>
            <div>
              <label htmlFor="password">Ingresá tu password</label>
              <Field 
                type="password" 
                name="password" 
                id="password"                
              ></Field>
              <ErrorMessage name="password" component={() => (
                  <div className="passwordError">{formikProps.errors.password}</div>
              )}/>
            </div>
            <button type="submit" className="ingresar">Ingresar</button>
          </Form>
        )}
      </Formik>
        {success && (<div className="success">
                      <p className="successfulSend">Bienvenido!</p>
                        <Link to='/Home'>
                            <button className="ingresar">Ingresar al sitio</button>
                        </Link>
                    </div>)}
        {fail && <p className="failToSend">Email o password incorrecto/s</p>}
    </>
  );
};

export default Login;

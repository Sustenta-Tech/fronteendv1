import React from "react";
import "./Contato.css"

function Contato() {
    return (
        <>

           

                <main className="contato">
                    <section className="formulario">
                        <h3>Contato</h3>
                        <form>
                            <div className="campos-form">
                                <label htmlFor="nome">Nome:</label>
                                <input onKeyUp="validarNome()" id="nome" type="text" placeholder="Insira o seu nome completo..."/>
                                    <div id="txtNome"></div>
                            </div>
                            <div className="campos-form">
                                <label htmlFor="email">E-mail:</label>
                                <input onKeyUp="validarEmailRegEx()" id="email" type="text" placeholder="Insira o seu e-mail..."/>
                                    <div id="txtEmail"></div>
                            </div>
                            <div className="campos-forma">
                                <label htmlFor="mensagem">Mensagem:</label>
                                <textarea id="mensagem" type="text" rows="8" placeholder="Insira o sua mensagem..."></textarea>
                                <div id="txtMensagem"></div>
                            </div>
                            <button onClick="enviarFormulario()" type="button">Enviar</button>
                        </form>
                    </section>


                </main>

                    
                
            


        </>
    )

}

export default Contato;

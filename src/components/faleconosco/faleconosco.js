import React from "react";
import './styles.css'

function FaleConosco(){
    return (
        <div className="main-content">
            <form className="form-contact">
                <label className="entry-label" htmlFor="name">Nome Completo</label>
                <input className="entry" type="text" name="" id="name" required />

                <label className="entry-label" htmlFor="email">Email</label>
                <input className="entry" type="email" name="" id="email" required />

                <label className="entry-label" htmlFor="phone">Número para contato</label>
                <input className="entry" type="tel" name="" id="phone" required />

                <label className="entry-label" htmlFor="message">Deixe aqui sua mensagem</label>
                <textarea className="entry" name="" id="message" cols="30" rows="10"></textarea>

                <div className="div-entry">
                    <p className="entry-label"> Como prefere nosso contato?</p>
                    <label className="entry-label" htmlFor="email-choice">
                        <input type="radio" name="contact-choice" id="email-choice" /> - Email
                    </label>

                    <label className="entry-label" htmlFor="phone-choice">
                        <input type="radio" name="contact-choice" id="phone-choice" /> - Telefone
                    </label>

                    <label className="entry-label" htmlFor="whatsapp-choice" lang="en">
                        <input type="radio" name="contact-choice" id="whatsapp-choice" /> - Whatsapp
                    </label>
                </div>
                
                <label className="entry-label" htmlFor="day-period">Em qual horário prefere ser atendido?</label>
                <select className="entry" name="day-period" id="">
                    <option value="none">---Selecione aqui</option>
                    <option value="morning">Manhã</option>
                    <option value="afternoon">Tarde</option>
                    <option value="evening">Noite</option>
                </select>

                <label htmlFor="check-mailing" className="entry-label">
                    Gostaria de receber nossas novidades por email? <br/>
                    <input type="checkbox" name="check-mailing" id="check-mailing" />
                    <p> - Sim, eu concordo em receber as novidades.</p>
                </label>

                <input className="entry" type="submit" value="Enviar formulário" />
            </form>
        </div>
    )
}

export default FaleConosco;
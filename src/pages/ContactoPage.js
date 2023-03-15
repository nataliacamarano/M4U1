import React from 'react'

const ContactoPage = (props) => {
    return (
        <main className='holder contacto'>
            <div>
                <h2>Contacto</h2>
                <form action='' method='' className='formulario'>
                    <p>
                        <label htmlFor='nombre'>Nombre</label>
                        <input type='text' name='nombre' />
                    </p>
                    <p>
                        <label htmlFor='email'>Email</label>
                        <input type='text' name='email' />
                    </p>
                    <p>
                        <label htmlFor='telefono'>Telefono</label>
                        <input type='text' name='telefono' />
                    </p>
                    <p>
                        <label htmlFor='mensaje'>Mensaje</label>
                        <textarea type='text' name='mensaje' ></textarea>
                    </p>
                    <p className='acciones'>
                        <input type='submit' value='Enviar' />
                    </p>
                </form>
            </div>
            <div className='datos'>
                <h3>Otras vías de comunicación</h3>
                <p>También puede contactarse con nosotros usando los siguientes medios</p>
                <ul>
                    <li>Teléfono: 43242322</li>
                    <li>Email: contacto@transportesx.com.ar</li>
                    <li>Facebook:</li>
                    <li>Twitter:</li>
                    <li>Skype:</li>
                </ul>
            </div>
        </main>
    )
}

export default ContactoPage
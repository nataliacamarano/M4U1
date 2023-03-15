import React from 'react'

const HomePage = (props) => {
    return (
        <main className='holder'>
            <div className='homeimg'>
                <img src='img/home/img01.jpg' alt='Avion' />
            </div>
            <div className='columnas'>
                <div className='bienvenidos'>
                    <h2>Bienvenidos</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, nec</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, nec</p>
                </div>
                <div className='testimonios'>
                    <h2>Testimonios</h2>
                    <span className='cita'>Simplemente excelente</span>
                    <span className='autor'>- Juan Perez - zapatos.com</span>
                </div>
            </div>
        </main>
    )
}

export default HomePage
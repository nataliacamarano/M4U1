import React from 'react'

const NosotrosPage = () => {
    return (
        <main className="holder">
            <div className='historia'>
                <h2>Historia</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, nec</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, nec</p>
            </div>
            <div className='staff'>
                <h2>Staff</h2>
                <div className='personas'>
                    <div className='persona'>
                        <img src='img/nosotros/imagen1.jpg' alt='Juan Gómez' />
                        <h5>Juan Gómez</h5>
                        <h6>Gerente General</h6>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default NosotrosPage
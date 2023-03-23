import '../../styles/components/layout/Header.css';
function Header(props) {
    return (
        <header>
            <div className='holder'>
                <img src='img/logo.jpeg' width='100' alt='Transportes X' />
                <h1>Transportes X</h1>
            </div>
        </header>
    )
}

export default Header;
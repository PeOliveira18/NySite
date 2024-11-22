import logo from '../images/icone.png'

function Header() {
    return (  
        <header className='flex justify-start w-full px-10'>
            <img src={logo} alt="" className='w-10 h-10'/>
        </header>
    );
}

export default Header;
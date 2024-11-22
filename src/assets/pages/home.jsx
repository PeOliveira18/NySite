import foto from '../images/foto-pessoas.jpg';
import facebook from '../images/facebook.svg'
import instagram from '../images/instagram.svg'
import Header from '../components/header';
import logo from '../images/icone.png'

function Home() {
    return (  
        <div className='bg-top h-screen bg-cover bg-no-repeat flex just w-full text-white' style={{backgroundImage: `url(${foto})`,}}>
            <div className='bg-opacity-70 bg-black w-full h-full items-center flex flex-col justify-around'>
                <Header/>
                <h1 className='text-8xl font-classico mt-20'>Em breve</h1>
                <div className='text-center'>
                    <p className='text-gray-300 font-montserratThin'>Me notifique quando estiver pronto</p>
                    <form className='mt-3'>
                        <input type="text" placeholder='Email' className='rounded-l-md px-3 py-2 w-96'/>
                        <button type='submit' className='bg-blue-500 rounded-r-md px-3 py-2'>Enviar</button>
                    </form>
                </div>
                <div className='flex gap-4 mt-10 justify-end items-end'>
                    <img src={facebook} alt="" className='w-10 h-10 cursor-pointer transition ease-in-out duration-300 transform hover:scale-125'/>
                    <img src={instagram} alt="" className='w-9 h-10 cursor-pointer transition ease-in-out duration-300 transform hover:scale-125'/>
                </div>
            </div>
        </div>
    );
}

export default Home;

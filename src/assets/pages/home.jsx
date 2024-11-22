import foto from '../images/foto-pessoas.jpg';
import facebook from '../images/facebook.svg'
import instagram from '../images/instagram.svg'
import Header from '../components/header';
import logo from '../images/icone.png'
import { useState } from 'react';
import emailjs from '@emailjs/browser'
    


function Home() {

    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)

    function sendEmail(e){
        e.preventDefault()
        setLoading(true)

        const templateParams = {
            email: email,
            from_email: 'nystudiosp@gmail.com'
        }

        emailjs.send("service_nmnz6uo","template_tmdzl2x", templateParams, "htE14yKxNT8JrJ6Tr")
        .then((res) => {
            console.log("Email enviado", res.status, res.text)
            setEmail('')
            setLoading(false)
        }, (err) => {
            console.log("Erro ao enviar o email", err);
            setLoading(false)
        })
    }

    
    return (  
        <div className='bg-top h-screen bg-cover bg-no-repeat flex just w-full text-white' style={{backgroundImage: `url(${foto})`,}}>
            <div className='bg-opacity-70 bg-black w-full h-full items-center flex flex-col justify-around'>
                <Header/>
                <h1 className='text-8xl font-classico mt-20'>Em breve</h1>
                <div className='text-center'>
                    <p className='text-gray-300 font-montserratThin'>Me notifique quando estiver pronto</p>
                    <form className='mt-3 flex' onSubmit={sendEmail}>
                        <input type="email" placeholder='Email' className='rounded-l-md px-3 py-2 w-96 text-black outline-none invalid:text-red-500' onChange={(e) => setEmail(e.target.value)} value={email} required />
                        <button type='submit' className='bg-blue-500 rounded-r-md px-3 py-2 w-24 items-center h-10 flex justify-center' disabled={loading}>
                            {loading ? (
                                <svg className="animate-spin h-6 w-6 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path></svg>
                            ) : (
                                "Enviar"
                            )}
                        </button>
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

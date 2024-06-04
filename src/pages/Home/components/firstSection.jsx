
import { useContext, useEffect, useRef } from 'react';
import './firstSection.sass'
import resume from '../../../assets/pdfs/resume.pdf'
import me from '../../../assets/img/me.png'
import about from '../../../assets/img/about.png'
import coins from '../../../assets/img/coins.png'
import shop from '../../../assets/img/shop.png'
import platform from '../../../assets/img/platform.png'
import event from '../../../assets/img/event.png'
import { FaBootstrap, FaCloudDownloadAlt, FaCss3, FaGithub, FaLaravel, FaPhp, FaReact } from "react-icons/fa";
import { FirstSectionAbout } from '../../About/components/firstSection';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaHtml5 } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import emailjs from '@emailjs/browser';



export const FirstSection = () => {

    useEffect(() => {
        Aos.init();
    }, [])


    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_3265bdb', 'template_ujlk8in', form.current, {
                publicKey: '8ijU4PQRctatL35aG',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    form.current.reset();
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    }

    return (
        < >


            <div className=''>
                <div id='home' className='h-fit w-full page1'>
                    <div className='py-14'>
                        <div className='flex items-center justify-center gap-16 py-20 home'>
                            <div data-aos="fade-right" data-aos-duration="2500" >
                                <div className='flex flex-col gap-4 w-[30vw] homepage'>
                                    <h2 className='text-5xl font-bold  react'>Front-End React Developer👋</h2>
                                    <p className='w-[100%] para1'>Hi, i'm Ibrahim Boussta. A passionate Front-end React Developer based in Casablanca, Morocco</p>
                                    <div className='flex gap-2 text-2xl'>
                                        <Link to="https://www.linkedin.com/in/ibrahim-boussta-161325288/" target='blank'><FaLinkedin className='cursor-pointer' /></Link>
                                        <Link to="https://github.com/Ibrahimboussta" target='blank'><FaGithub /></Link>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <b className='text-2xl skills'>Skills : </b>
                                        <FaHtml5 className='text-red-600 text-xl' />
                                        <FaCss3 className='text-blue-600 text-xl' />
                                        |
                                        <FaBootstrap className='text-blue-600 text-xl' />
                                        <SiTailwindcss className='text-blue-600 text-xl' />
                                        |
                                        <IoLogoJavascript className='text-yellow-300 text-xl' />
                                        <FaReact className='text-blue-800 text-xl' />

                                    </div>
                                </div>
                            </div>
                            <div className=''>
                                <img data-aos="fade-left" data-aos-duration="2500" className='w-[25vw] rounded-2xl' src={me} alt="" />
                            </div>
                        </div>
                    </div>

                </div>

                <div id='about' className='flex items-center justify-center gap-16 about'>
                    <div data-aos="fade-right" data-aos-duration="2500" >
                        <div className='flex flex-col gap-3 w-[30vw] aboutpage'>
                            <div>
                                <img className='w-[30vw] aboutimg' src={about} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='w-[30vw] flex flex-col gap-4 aboutmee' data-aos="fade-left" data-aos-duration="2500">
                        <h1 className='font-bold text-4xl aboutme'>About me :</h1>
                        <p className='text-l'>.Welcome to my front-end world! 🚀. I'm ibrahim Boussta, a passionate developer who turns code into engaging user experiences. Explore my portfolio to see my creative skills, technological aptitude, and dedication to responsive web design. Let us work together to produce something great!.</p>
                        {/* <p><b>Skills : </b>
                    <FaHtml5 />
                    </p> */}

                    </div>
                </div>

                <div id='projects' className='py-14'>
                    <h1 className='flex justify-center w-[55%] text-4xl font-bold '>Projects</h1>
                    <div className='flex items-center justify-center gap-14 py-14 projects'>
                        <div className=''>
                            <img data-aos="fade-right" data-aos-duration="2500" className='w-[30vw] rounded-xl hover:scale-110 duration-700 coins' src={coins} alt="" />
                        </div>
                        <div data-aos="fade-right" data-aos-duration="2500" className='w-[25%] flex flex-col gap-3 Currency'>
                            <h1 className='font-semibold text-xl'>Currency</h1>
                            <p className='text-l'>Creating a safe digital/physical medium that uses blockchain technology and cutting-edge security features to enable smooth transactions in a particular economic system. with the goals of creating a stable economy, encouraging financial inclusion, and creating a solid currency to sustain economic activity.</p>
                            <button className='border border-black rounded-md px-4 w-20 hover:shadow-lg duration-500'><a target='_blank' href="">Github</a></button>

                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <hr className='w-[40%] border-black ' />
                    </div>

                    <div  data-aos="fade-right" data-aos-duration="2500" className='flex items-center justify-center gap-14 py-16 projects'>
                        <div className=''>
                            <img className='w-[30vw] rounded-xl hover:scale-110 duration-700 coins' src={shop} alt="" />
                        </div>
                        <div className='w-[25%] flex flex-col gap-3 Currency'>
                            <h1 className='font-semibold text-xl'>E-commerce website</h1>
                            <p className='text-l'>My ability to create a user-friendly online platform with features like safe transactions, a product catalog, and responsive design is demonstrated by the E-commerce website project. displaying expertise in developing a smooth online purchasing experience for customers and companies.</p>
                            <button className='border border-black rounded-md px-4 w-20 hover:shadow-lg duration-500'><a target='_blank' href="https://github.com/Ibrahimboussta/ibrahimBoussta_projet_react">Github</a></button>

                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <hr className='w-[40%] border-black ' />
                    </div>

                    <div  data-aos="fade-right" data-aos-duration="2500" className='flex items-center justify-center gap-14 py-16 projects'>
                        <div className=''>
                            <img className='w-[30vw] rounded-xl hover:scale-110 duration-700 coins' src={platform} alt="" />
                        </div>
                        <div className='w-[25%] flex flex-col gap-3 Currency'>
                            <h1 className='font-semibold text-xl'>Social media platform</h1>
                            <p className='text-l'>Front-End Social Media Platform project, highlighting my design and user interface skills. Features include profiles, messaging, and personalized feeds, emphasizing a visually appealing and user-friendly experience.</p>
                            <button className='border border-black rounded-md px-4 w-20 hover:shadow-lg duration-500'><a target='_blank' href="https://github.com/oufkirhamza/DevHub">Github</a></button>

                        </div>
                    </div>

                    <div className='flex justify-center'>
                        <hr className='w-[40%] border-black ' />
                    </div>


                    <div  data-aos="fade-right" data-aos-duration="2500" className='flex items-center justify-center gap-14 py-16 projects '>
                        <div className=''>
                            <img className='w-[30vw] rounded-xl hover:scale-110 duration-700 coins' src={event} alt="" />
                        </div>
                        <div className='w-[25%] flex flex-col gap-3 Currency'>
                            <h1 className='font-semibold text-xl'>Events management platform</h1>
                            <p className='text-l'>Our events platform is your one-stop destination for all things related to events. Whether you're organizing an event or looking to attend one, we've got you covered.</p>
                                <button className='border border-black rounded-md px-4 w-20 hover:shadow-lg duration-500'><a target='_blank' href="https://github.com/Ibrahimboussta/ibrahim_boussta_project_final_latavel">Github</a></button>
                        </div>
                    </div>

                    <div className='flex justify-center'>
                        <hr className='w-[40%] border-black ' />
                    </div>

                    <div  data-aos="fade-right" data-aos-duration="2500" id='contact' className='py-14'>
                        <h1 className='flex justify-center w-[55%] text-4xl font-bold'>Contact me</h1>
                        <div className='flex justify-center py-14 contact'>
                            <form className='flex flex-col w-[55%] gap-4 form' ref={form} onSubmit={sendEmail}>
                                
                                    <div className='flex items-center gap-4 w-[100%] name'>
                                        <label htmlFor="" className='text-lg w-[15%] fullname'>Full name</label>
                                        <input name="from_name" className='p-2 w-[90%] border-none rounded-lg shadow-sm bg-[#efeeee] fullname' type="text" placeholder='Full name' required />
                                    </div>

                                    <div className='flex items-center gap-4 w-[100%] name'>
                                        <label htmlFor="" className='text-lg w-[15%] fullname'>Your email</label>
                                        <input name="from_email" className='p-2 w-[90%] border-none rounded-lg shadow-sm bg-[#efeeee] fullname' type="email" placeholder='Your email' required />
                                    </div>
                                

                                <div className='flex gap-4 msg'>
                                    <label htmlFor="" className='text-xl w-[15%]'>Message</label>
                                    <div className='flex flex-col gap-3 w-[100%] name'>
                                        <textarea placeholder='Message' className='w-[100%] ml-2 border-none rounded-lg shadow-sm bg-[#efeeee] fullname' name="message" />
                                        <input className='flex border-none bg-white rounded-lg shadow-sm w-fit px-6 py-1 ml-2 ' type="submit" value="Send" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>


                    
                </div>
            </div>
        </>
    );
}

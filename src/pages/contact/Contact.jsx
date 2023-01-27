import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_2.jpg'
import { MdEmail } from 'react-icons/md'
import { BsMessenger } from 'react-icons/bs'
import { IoLogoWhatsapp } from 'react-icons/io'
import './contact.css'






const Contact = () => {
    return (
        <>
            <Header title="Get In Touch" image={HeaderImage}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati reiciendis perferendis nisi cupiditate quam eius?
            </Header>
            <section className="contact">
                <div className="container contact_container">
                    <div className="contact_wrapper">
                        <a href="mailto:biduzao.bidu21@gmail.com" target='_blank' rel='noreferrer nopener'><MdEmail /></a>
                        <a href="http://m.me/bidu.edson" target='_blank' rel='noreferrer nopener'><BsMessenger /></a>
                        <a href="https://wa.me/+05511932237059" target='_blank' rel='noreferrer nopener'><IoLogoWhatsapp /></a>
                    </div>
                </div>
            </section>
        </>


    )

}

export default Contact
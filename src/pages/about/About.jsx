import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_1.jpg'
import StoryImage from "../../images/about1.jpg"
import VisionImage from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg'
import './about.css'

const About = () => {
    return (
        <>
            <Header title="About Us" image={HeaderImage}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus earum,
                ut animi quia maiores rem sapiente? Doloremque culpa molestiae voluptates.
            </Header>

            <section className="about_story">
                <div className="container about_story-container">
                    <div className="about_section-image">
                        <img src={StoryImage} alt="Our Vision Image" />
                    </div>
                    <div className="about_section-content">
                        <h1>Our Story</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos numquam, distinctio,
                            quam minima neque sapiente fuga, aliquam sed ipsum accusantium dicta eaque hic.
                            s.</p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, sed laborum.
                            Soluta architecto, minus officia fugiat facilis ?
                        </p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum iure ipsam est sed,
                            cupiditate suscipit repudiandae neque! Accusamus, non voluptates?</p>
                    </div>
                </div>
            </section>

            <section className="about_Vision">
                <div className="container about_vision-container">
                    <div className="about_section-content">
                        <h1>Our Vision</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos numquam, distinctio,
                            quam minima neque sapiente fuga, aliquam sed ipsum accusantium dicta eaque hic.
                            Maxime amet optio voluptatibus quos rerum explicabo voluptates quaerat tempora vel,
                            aperiam impedit, facere eum dolore est unde officiis architecto ut omnis.</p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, sed laborum.
                            Soluta architecto, minus officia fugiat facilis temporibus maxime neque sit veniam
                            quas quam explicabo numquam quidem et beatae sed?
                        </p>
                    </div>
                    <div className="about_section-image">
                        <img src={VisionImage} alt="Our Vision Image" />
                    </div>
                </div>
            </section>

            <section className="about_mission">
                <div className="container about_mission-container">
                    <div className="about_section-image">
                        <img src={MissionImage} alt="Our Mission Image" />
                    </div>
                    <div className="about_section-content">
                        <h1>Our Mission</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos numquam, distinctio,
                            quam minima neque sapiente fuga, aliquam sed ipsum accusantium dicta eaque hic.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, sed laborum.
                            Soluta architecto, minus officia fugiat facilis.
                        </p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum iure ipsam est sed,
                            cupiditate suscipit?</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About
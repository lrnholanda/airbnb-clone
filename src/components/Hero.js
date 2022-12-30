import hero from '../imgs/heroimg.png';
import '../styles/hero.css';
function Hero (){
    return(
        <div>
           <section className='hero'>
            <img className='hero-img' src={hero} alt="hero image"/>
            <h2 className='hero-heading'>Online Experiences</h2>
            <p className='hero-p'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </p>
           </section>    
        </div>
    );
}

export default Hero;
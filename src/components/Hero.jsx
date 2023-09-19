import hero from '../assets/images/hero.jpeg'
import Navbar from './Navbar';

export default function Hero() {
    return (
        <div className="hero mb-3">
            <img className="hero__img" src={hero} alt=""/>
            <div className="hero__overlay">
                <Navbar />
                <h1 className="hero__text text-6xl text-white font-bold">Rob Giometti</h1>
            </div>
        </div>
    );
}
import github from '../../../assets/icons/github.svg';
import instagram from '../../../assets/icons/instagram.svg';
import linkedin from '../../../assets/icons/linkedin.svg';
import twitch from '../../../assets/icons/twitch.svg';
import twitter from '../../../assets/icons/twitter.svg';
import './SocialSection.css';

function SocialSection() {
    return (
        <div class="socialLogos">
            <a href='http://google.com.br'>
                <img src={github} alt='Logo do github'/>
            </a>
            <a href='http://google.com.br'>
                <img src={instagram} alt='Logo do instagram'/>
            </a>
            <a href='http://google.com.br'>
                <img src={linkedin} alt='Logo do linkedin'/>
            </a>
            <a href='http://google.com.br'>
                <img src={twitch} alt='Logo do twitch'/>
            </a>
            <a href='http://google.com.br'>
                <img src={twitter} alt='Logo do twitter'/>
            </a>
        </div>
    )
}

export default SocialSection;
import './Header.css'
import ImgFrame from "../../partials/ImageFrame";

const userName = ['@LucBzrra', '@tralala'];

function Header() {
    return(
        <div className="photo">
            <ImgFrame></ImgFrame>
            <a href="https://www.instagram.com/lucbzrra/" target="_blank" rel="noopener noreferrer">{userName[0]}</a>
        </div>
    )
}

export default Header;
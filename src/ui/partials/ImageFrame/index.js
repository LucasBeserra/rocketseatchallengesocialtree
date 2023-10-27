import './ImageFrame.css'
import PerfilImage from '../../../assets/images/perfil-image.png';

function ImgFrame() {
    return (
        <img className='frameImg' src={PerfilImage} alt="Imagem de perfil"></img>
    )
}

export default ImgFrame;
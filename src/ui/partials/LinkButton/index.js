import './LinkButton.css';

const botoes = [
    {
        nome: 'Portifolio',
        link: 'https://github.com/LucasBeserra?tab=repositories'
    },
    {
        nome: 'Alura',
        link: 'https://cursos.alura.com.br/user/lbeserra-under'
    },
    {
        nome: 'Rocketseat',
        link: 'https://app.rocketseat.com.br/me/lucas-da-silva-beserra-dev'
    },
    {
        nome: 'HackeRank',
        link: 'https://www.hackerrank.com/lbeserra_under?hr_r=1'
    }
]


function LinkButton() {
    return (
        botoes.map(function(botao){
            return (
                <button><a href={botao.link} target='_blank' rel='noopener noreferrer'>{botao.nome}</a></button>
            )
        })
    )
}

export default LinkButton;
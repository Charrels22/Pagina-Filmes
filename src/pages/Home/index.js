import { useEffect, useState } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import './home.css'

//movie/now_playing?api_key=3d0cdcaf8689838a282f3812936ea744&language=pt-BR

function Home() {
    const [filme, setFilme] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        
        async function loadFilme(){
            const response = await api.get("movie/now_playing", {
                params: {
                    api_key: "3d0cdcaf8689838a282f3812936ea744",
                    language: "pt-BR",
                    page: 1,
                }
            })

            setFilme(response.data.results)
            setLoading(false);
        }

        loadFilme();
    }, [])

    if(loading){
        return(
            <div className='loading'>
                <h2>Carregando os filmes...</h2>
            </div>
        )
    }
    return(
        <div className='container'>
            <div className='lista-filmes'>
                {filme.map((filme)=> {
                    return(
                        <article key={filme.id}>
                            <strong>{filme.title}</strong>
                            <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title} />
                            <Link to={`/filme/${filme.id}`}>Acessar</Link>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}

export default Home;
import './twitter-follow-card.css'
import { useState } from 'react' //Llama a los 'hooks' que son acciones que interatuan al activarlos


// El parametro children utiliza el contenido de componente para pasarlo como parametro.
export function TwitterFollowCard({children, username}){

    const [ isFollowing, setIsFollowing ] = useState(false)

    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const styleButton = isFollowing ? 'ln-article-aside-button-twitter is-following' : 'ln-article-aside-button-twitter' 

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }


    return (
        <article className='ln-article-twitter'>
            <header className='ln-article-header-twitter'>
                <img className='ln-article-header-img-twitter' src="https://unavatar.io/sindresorhus@gmail.com" alt="avatar" />
                <div className='ln-article-header-description-twitter'>
                    {children}
                    <span className='ln-article-header-description-span-twitter'>@{username}</span>
                </div>
            </header>
            <aside className='ln-article-aside-twitter'>
                <button className={styleButton} onClick={handleClick} >{text}</button>
            </aside>
        </article>
    )
}


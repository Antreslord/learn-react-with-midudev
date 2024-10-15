import { TwitterFollowCard } from "./twitter-follow-card"

// Pasar Objetos como prompts es asi 

const App = () =>{

    // Automatizar la renderizacion de listas
    const users = [
        {
            username: 'Juanpo',
            name: 'Juan Alberto Posada'
        },
        {
            username: 'MariAE_B',
            name: 'Maria Helena Barrios'
        },
        {
            username: 'CamiloBarra',
            name: 'Camilo Andres Barragan'
        },
        {
            username: 'Stafa',
            name: 'Stefania Julieth Pedraza'
        },
    ]

    return (
        <section className="App">

            {
                users.map((user) => {
                    const { username, name } = user

                    return(
                        <TwitterFollowCard key={username} username={username}>
                            <strong>{name}</strong>
                        </TwitterFollowCard>
                    )
                })
            }

        </section>
    )
}

export default App
const projects = [
    {
        title: 'Sapien Network',
        name: 'sapien',
        href: 'https://www.linkedin.com/company/sapien.network/',
    },
    {
        title: 'CredifAI',
        name: 'credifai',
        href: 'https://github.com/rgio/CredifAI',
    },
    {
        title: 'Tree of Thoughts',
        name: 'tot',
        href: 'https://community.wolfram.com/groups/-/m/t/2959295',
    },
    {
        title: 'RL Trading Agent',
        name: 'rnn',
        href: 'https://github.com/rgio/crypto_bot/',
    },
  ]

export default function Projects() {
    return (
        <div>
            {/* <h1 className="text-4xl font-bold">Projects</h1> */}
            <div className="project__container">
                {projects.map((project) => (
                    <a className={project.name} href={project.href} target="_blank" rel="noreferrer">
                    <div className="project" key={project.title}>
                        { project.name !== 'credifai' &&
                            <div>
                                <p className="text-2xl bg-white font-semibold text-black">{project.title}</p>
                            </div>
                        }
                        { project.name === 'credifai' &&
                            <div className="flex flex-row items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-indigo-600">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                                </svg>
                                <p className="text-3xl ml-3 bg-white font-semibold text-black">{project.title}</p>
                            </div>
                        }
                    </div>
                    </a>
                ))}
            </div>
        </div>
    )
}
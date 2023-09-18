import tot from '../assets/images/tot.png'
import sapien from '../assets/images/sapien.jpeg'

const projects = [
    {
        title: 'Sapien Network',
        name: 'sapien',
        href: 'https://www.linkedin.com/company/sapien.network/',
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
                    <a className={project.name} href={project.href} target="_blank">
                    <div className="project" key={project.title}>
                        {/* <img className="project__img" src={project.imageUrl} alt="" /> */}
                        <div>
                            <p className="text-2xl bg-white font-semibold text-black">{project.title}</p>
                        </div>    
                    </div>
                    </a>
                ))}
            </div>
        </div>
    )
}
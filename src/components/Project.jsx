import Link from "./Link";


const Project = ({ data }) => {
    return (
        <article className="project">
            <div className="image">
                <img src={data.image} alt={data.title} />
            </div>
            <div className="content">
                <h3><a href={data.liveLink} target="_blank">{data.title}</a></h3>
                <ul>
                    {data.tech.map((tech) => (
                        <li key={tech}>{tech}</li>
                    ))}
                </ul>
                <p>{data.description}</p>
                <div>
                    <Link href={data.liveLink} target="_blank">Live Site</Link>
                    <Link href={data.githubLink} target="_blank">GitHub</Link>
                </div>
            </div>
        </article>
    )
}

export default Project;

//TODO: Set up proptypes
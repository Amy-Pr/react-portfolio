const Link = ({href, children}) => {
    return(
        <a href={href} className="btn" target="_blank">{children}</a>
    )
}

export default Link;

//TODO: Set up proptypes
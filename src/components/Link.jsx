const Link = ({href, children, noTarget}) => {
    return(
        <a href={href} className="btn" target={noTarget ? null : "_blank"}>{children}</a>
    )
}

export default Link;

//TODO: Set up proptypes
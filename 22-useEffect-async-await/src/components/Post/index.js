import './style.css';

function Post(props) {
    const { title, body, id } = props;
    return (
        <div className="posts__item">
            <div className="posts__wrapper">
                <p className="title__post title__post--id">{id}</p>
                <h1 className="heading__post">{title}</h1>
                <p className="title__post">{body}</p>
            </div>
        </div>
    );
}

export default Post;

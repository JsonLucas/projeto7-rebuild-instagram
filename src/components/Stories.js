function Stories(username){
    const srcImage = `./assets/img/${username.name}.svg`;
    return (
        <div className="story">
            <div className="imagem">
                <img src={srcImage} />
            </div>
            <div className="usuario">
                {username.name}
            </div>
        </div>
    );
}

export default Stories;
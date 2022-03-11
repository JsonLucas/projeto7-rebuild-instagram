function SetupProfileLogoLikes(content){
    const logos = ['./images/respondeai.svg', './images/adorable_animals.svg'];
    return(
        <div className="curtidas">
            <img src={logos[content.index]} />
            <div className="texto">
                Curtido por <strong>{content.name}</strong> e <strong>outras {content.moreLikes} pessoas</strong>
            </div>
        </div>
    );
}
export default SetupProfileLogoLikes;
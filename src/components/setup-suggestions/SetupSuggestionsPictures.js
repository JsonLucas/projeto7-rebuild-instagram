function SetupSuggestionsPictures(profile){
    const logos = [
        './images/bad.vibes.memes.svg', 
        './images/chibirdart.svg', 
        './images/razoesparaacreditar.svg', 
        './images/adorable_animals.svg', 
        './images/smallcutecats.svg'
    ];
    return(
        <div className="usuario">
            <img src={logos[profile.index]} />
            <div className="texto">
                <div className="nome">{profile.name}</div>
                <div className="nome">{profile.reason}</div>
            </div>
        </div>
    );
}
export default SetupSuggestionsPictures;
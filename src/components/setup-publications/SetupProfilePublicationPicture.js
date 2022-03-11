function SetupProfilePublicationPicture(profile){
    const logos = ['./images/meowed.svg', './images/barked.svg'];
    return(
        <div className="usuario">
            <img src={logos[profile.index]}/>
            {profile.name}
        </div>
    );
}

export default SetupProfilePublicationPicture;
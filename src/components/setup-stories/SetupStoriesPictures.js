function SetupStoriesPictures(profile){
    const logos = [
        './images/9gag.svg',
        './images/meowed.svg', 
        './images/barked.svg', 
        './images/nathanwpylestrangeplanet.svg', 
        './images/wawawicomics.svg', 
        './images/respondeai.svg', 
        './images/filomoderna.svg', 
        './images/memeriagourmet.svg'
    ];
    return(
        <div className="imagem">
            <img src={logos[profile.index]} />
        </div>
    );
}

export default SetupStoriesPictures;
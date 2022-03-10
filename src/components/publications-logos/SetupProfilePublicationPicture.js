import meowed from './logos/meowed.svg';
import barked from './logos/barked.svg';
function SetupProfilePublicationPicture(profile){
    const logos = [meowed, barked];
    return(
        <div className="usuario">
            <img src={logos[profile.index]}/>
            {profile.name}
        </div>
    );
}

export default SetupProfilePublicationPicture;
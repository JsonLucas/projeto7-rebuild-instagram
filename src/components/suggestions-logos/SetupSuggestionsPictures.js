import badVibesMemes from './logos/bad.vibes.memes.svg';
import chibirdart from './logos/chibirdart.svg';
import razoesparaacreditar from './logos/razoesparaacreditar.svg';
import adorableAnimals from './logos/adorable_animals.svg';
import smallcutecats from './logos/smallcutecats.svg';

function SetupSuggestionsPictures(profile){
    const logos = [badVibesMemes, chibirdart, razoesparaacreditar, adorableAnimals, smallcutecats];
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
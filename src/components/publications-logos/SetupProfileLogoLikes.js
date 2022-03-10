import respondeai from './logos/respondeai.svg';
import adorableAnimals from './logos/adorable_animals.svg';
function SetupProfileLogoLikes(content){
    const logos = [respondeai, adorableAnimals];
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
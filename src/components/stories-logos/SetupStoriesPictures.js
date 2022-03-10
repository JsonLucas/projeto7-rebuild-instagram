import logo9gag from './logos/9gag.svg';
import meowed from './logos/meowed.svg';
import barked from './logos/barked.svg';
import nathanwpylestrangeplanet from './logos/nathanwpylestrangeplanet.svg';
import wawawicomics from './logos/wawawicomics.svg';
import respondeai from './logos/respondeai.svg';
import filomoderna from './logos/filomoderna.svg';
import memeriagourmet from './logos/memeriagourmet.svg';

function SetupStoriesPictures(profile){
    const logos = [logo9gag, meowed, barked, nathanwpylestrangeplanet, 
    wawawicomics, respondeai, filomoderna, memeriagourmet];
    return(
        <div className="imagem">
            <img src={logos[profile.index]} />
        </div>
    );
}

export default SetupStoriesPictures;
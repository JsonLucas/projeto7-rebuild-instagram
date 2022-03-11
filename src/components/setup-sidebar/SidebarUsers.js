import SetupSuggestionsPictures from '../setup-suggestions/SetupSuggestionsPictures';
export function SidebarUsers(profile){
    const catana = './images/catanacomics.svg';
    return(
        <div className="usuario">
        <img src={catana} />
            <div className="texto">
                <strong>{profile.username}</strong>
                {profile.name}
            </div>
        </div>
    );
}

export function SidebarSuggestions(){
    const dataUsernames = ['bad.vibes.memes', 'chibirdart', 'razoesparaacreditar', 'adorable_animals', 
    'smallcutecats'];
    const dataReasons = ['Segue você', 'Segue você', 'Novo no Instagram', 
    'Segue você', 'Segue você'];
    return(
        <div className="sugestoes">
            <div className="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>        
            {dataUsernames.map((item, index) => 
                <div className="sugestao">
                    <SetupSuggestionsPictures index={index} name={item} reason={dataReasons[index]}/>
                    <div className="seguir">Seguir</div>
                </div>
            )}
        </div>
    );
}

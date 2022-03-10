export function SidebarUsers(profile){
    const profileImg = `../assets/img/${profile.username}.svg`;
    return(
        <div className="usuario">
        <img src={profileImg} />
            <div className="texto">
                <strong>{profile.username}</strong>
                {profile.name}
            </div>
        </div>
    );
}

export function SidebarSuggestions(profile){
    const profileImg = `../assets/img/${profile.username}.svg`;
    return(
        <div className="sugestao">
            <div className="usuario">
                <img src={profileImg} />
                <div className="texto">
                    <div className="nome">{profile.username}</div>
                    <div className="razao">{profile.reason}</div>
                </div>
            </div>
            <div className="seguir">Seguir</div>
        </div>
    );
}

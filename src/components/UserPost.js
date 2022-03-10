function UserPost(profile){
    return (
            <div className="post">
              <div className="topo">
                <div className="usuario">
                  <img src="assets/img/meowed.svg"/>
                  {profile.username}
                </div>
                <div className="acoes">
                  <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
              </div>

              <div className="conteudo">
                <img src="assets/img/gato-telefone.svg" />
              </div>

              <div className="fundo">
                <div className="acoes">
                  <div>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                  </div>
                  <div>
                    <ion-icon name="bookmark-outline"></ion-icon>
                  </div>
                </div>

                <div className="curtidas">
                  <img src="assets/img/respondeai.svg" />
                  <div className="texto">
                    Curtido por <strong>{profile.likedBy}</strong> e <strong>outras {profile.moreLikes} pessoas</strong>
                  </div>
                </div>
              </div>
            </div>
    );
}

export default UserPost;
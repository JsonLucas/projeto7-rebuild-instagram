import ProfilePublicationPicture from './setup-publications/SetupProfilePublicationPicture';
import ContentPublication from './setup-publications/SetupContentPublication';
import ProfileLogoLikes from './setup-publications/SetupProfileLogoLikes';
function UserPost(){
  const dataUser = ['meowed', 'barked'];
  const likedBy = ['respondeai', 'adorable_animals'];
  const moreLikes = ['101.523', '99.159'];
    return (
      <div className='posts'>
          {dataUser.map((item, index) => 
            <div className="post">
              <div className="topo">
                <ProfilePublicationPicture name={item} index={index}/>
                <div className="acoes">
                  <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
              </div>

              <ContentPublication index={index}/>

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

                <ProfileLogoLikes name={likedBy[index]} moreLikes={moreLikes[index]} index={index}/>
              </div>
            </div>
          )}
      </div>
    );
}

export default UserPost;
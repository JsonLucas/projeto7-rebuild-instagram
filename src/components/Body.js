import Stories from './Stories';
import Sidebar from './Sidebar';
import UserPost from './UserPost';
function Body(){
    return (
    <div className="corpo">
        <div className="esquerda">
          <div className="stories">
            <Stories name='9gag'/>
            <Stories name='meowed'/>
            <Stories name='barked'/>
            <Stories name='nathanwpylestrangeplanet'/>
            <Stories name='wawawicomics'/>            
            <Stories name='respondeai'/>
            <Stories name='filomoderna'/>
            <Stories name='memeriagourmet'/>
            <div class="setinha">
              <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
          </div>
          <div className="posts">
            <UserPost username='meowed' likedBy='respondeai' moreLikes='101.523'/>
            <UserPost username='barked' likedBy='adorable_animals' moreLikes='99.159'/>
          </div>
        </div>
        <Sidebar/>
      </div>
    );
}
export default Body;
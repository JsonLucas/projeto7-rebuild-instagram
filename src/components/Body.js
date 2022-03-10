import Stories from './Stories';
import Sidebar from './Sidebar';
import UserPost from './UserPost';
function Body(){
    return (
      <div className="corpo">
        <div className="esquerda">
          <Stories />
          <UserPost/>
        </div>
        <Sidebar/>
      </div>
    );
}
export default Body;
import Stories from './Stories';
import Sidebar from './Sidebar';
import UserPost from './UserPost';
function Body(){
    return (
      <section className="corpo">
        <section className="esquerda">
          <Stories />
          <UserPost/>
        </section>
        <Sidebar/>
      </section>
    );
}
export default Body;
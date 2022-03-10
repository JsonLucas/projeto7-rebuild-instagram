import {SidebarUsers, SidebarSuggestions} from "./sidebar/SidebarUsers";
import Links from "./sidebar/Links";
import Copyright from "./sidebar/Copyright";

function Sidebar(){
    return(
        <aside className="sidebar">
          <SidebarUsers username='catanacomics' name='Catana'/>
          <SidebarSuggestions />
          <Links />
          <Copyright />
        </aside>
    );
}

export default Sidebar;
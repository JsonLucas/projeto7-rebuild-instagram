import {SidebarUsers, SidebarSuggestions} from "./setup-sidebar/SidebarUsers";
import Links from "./setup-sidebar/Links";
import Copyright from "./setup-sidebar/Copyright";

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
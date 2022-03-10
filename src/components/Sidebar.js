import {SidebarUsers, SidebarSuggestions} from "./SidebarUsers";
function Sidebar(){
    return(
        <div className="sidebar">
          <SidebarUsers username='catanacomics' name='Catana'/>
          <div className="sugestoes">
            <div className="titulo">
              Sugestões para você
              <div>Ver tudo</div>
            </div>
            <SidebarSuggestions username='bad.vibes.memes' reason='Segue você'/>
            <SidebarSuggestions username='chibirdart' reason='Segue você'/>
            <SidebarSuggestions username='razoesparaacreditar' reason='Novo no Instagram'/>
            <SidebarSuggestions username='adorable_animals' reason='Segue você'/>
            <SidebarSuggestions username='smallcutecats' reason='Segue você'/>
            <SidebarSuggestions username='smallcutecats' reason='Segue você'/>
          </div>

          <div className="links">
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
          </div>

          <div className="copyright">
            © 2022 INSTAGRAM DO FACEBOOK
          </div>
        </div>
    );
}

export default Sidebar;
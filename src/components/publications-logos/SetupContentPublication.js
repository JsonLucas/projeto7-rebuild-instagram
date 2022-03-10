import gatoTelefone from './logos/gato-telefone.svg';
import dog from './logos/dog.svg';
function SetupContentPublication(content){
    const contentPost = [gatoTelefone, dog]; 
    return(
        <div className="conteudo">
            <img src={contentPost[content.index]} />
        </div>
    );
}
export default SetupContentPublication;
function SetupContentPublication(content){
    const contentPost = ['./images/gato-telefone.svg', './images/dog.svg']; 
    return(
        <div className="conteudo">
            <img src={contentPost[content.index]} />
        </div>
    );
}
export default SetupContentPublication;
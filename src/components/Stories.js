import SetupStoriesPictures from './setup-stories/SetupStoriesPictures';
function Stories(){
    const data = ['9gag', 'meowed', 'barked', 'nathanwpylestrangeplanet', 
    'wawawicomics', 'respondeai', 'filomoderna', 'memeriagourmet'];
    return (
        <section className='stories'>
            {data.map((item, index) => 
                <div className='story'>
                    <SetupStoriesPictures index={index}/>
                    <div className="usuario">{item}</div>
                </div>
            )}
            <div className="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </section>
    );
}

export default Stories;
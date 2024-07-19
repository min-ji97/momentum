

const inputForm = document.querySelector('#search form');

const search = (e) => {
    e.preventDefault();
    console.log('e ->', e , e.target[0].value);
    let searchWord = e.target[0].value;
    if( searchWord.startsWith('https://') || searchWord.startsWith('http://')
        || searchWord.startsWith('file://') ){
        window.open(searchWord);
        searchWord= "";
        e.target[0].value = "";

    }else{
        window.open(`https://google.com/search?q=${searchWord}`);
        searchWord = "";
        e.target[0].value = "";
    }

}

inputForm.addEventListener('submit', search);

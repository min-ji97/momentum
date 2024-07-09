

// https://www.google.com/search?q= ${변수넣으면되지않을까..!}
/**
 * input value 값이 들어오면 위의 변수에 집어넣고!! 실행시키고!
 * value값의 시작이 https://로 시작한다면 저기에 넣지말고 실행시켜줄것!!!!
 *
 * 
 */


// const searchInput = document.getElementById("search-input");

// const showSearchResult = () => {
//     let searchWord = searchInput.value;
// 		window.location.href = `https://google.com/search?q=${searchWord}`;
// 		searchWord = "";
// };

// const enterKey = (event) => {
//     if (event.code === "Enter") {
//         showSearchResult();
//     }
// };
const inputForm = document.querySelector('#search form');

const search = (e) => {
    e.preventDefault();
    console.log('e ->', e , e.target[0].value);
    let searchWord = e.target[0].value;
    if( searchWord.startsWith('http') ){
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

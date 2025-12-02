
const createElements=(arr)=>{
    const htmlElements= arr.map(el => `<span class="btn">${el}</span>`);
    console.log(htmlElements);
}

const synonyms= ["hello", "hi", "konnichiwa"];
createElements(synonyms);
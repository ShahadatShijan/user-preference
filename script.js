const selectFontSize = document.querySelector("#selectFontSize");
const selectbgcolor = document.querySelector("#selectbgcolor");
const button = document.querySelector("button");
const main = document.querySelector("main");

const setValues = (fontSize,bgcolor) =>{
        selectFontSize.value = fontSize;
        selectbgcolor.value = bgcolor;
        main.style.fontSize = fontSize;
        main.style.backgroundColor = bgcolor;
}

//load localstorage value
const initialSetup = () =>{
    const bgcolor = localStorage.getItem("bgcolor");
    const fontSize = localStorage.getItem("fontSize");
    if(bgcolor && fontSize) {
        setValues(fontSize,bgcolor);
    }
    else if(!bgcolor && !fontSize){
        setValues("16px","aqua");
    }
    else if(!bgcolor && fontSize){
        setValues(fontSize,"aqua");
    }
    else if(bgcolor && !fontSize){
        setValues("16px",bgcolor);
    }
}

//add event listeners
selectFontSize.addEventListener("change", (e) => {
    const selectedFontSize = e.target.value;
    main.style.fontSize = selectedFontSize;
    localStorage.setItem("fontSize",selectedFontSize);
})
selectbgcolor.addEventListener("change", (e) => {
    const selectedbgcolor = e.target.value;
    main.style.backgroundColor = selectedbgcolor;
    localStorage.setItem("bgcolor",selectedbgcolor);
})
button.addEventListener("click",() =>{
    localStorage.removeItem("fontSize");
    localStorage.removeItem("bgcolor");
    setValues("16px","aqua");
})

initialSetup();
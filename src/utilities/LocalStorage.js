import { data } from "autoprefixer";


export const saveDataToLocalStorage = (blog) => {
    const saveData = JSON.parse(localStorage.getItem("blog")) || [];
    const dataExists = saveData.find((item) => item.id == blog.id);
    if(dataExists){
        alert("already added");
    }else{
        saveData.push(blog);
        localStorage.setItem("blog", JSON.stringify(saveData));
        alert("successfully added");
    }
};
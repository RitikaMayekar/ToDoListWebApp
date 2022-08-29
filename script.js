const title = document.querySelector("#title");
const desc = document.querySelector("#desc");
const save = document.querySelector("#save");
const list = document.querySelector(".list");


save.addEventListener("click", () => {

    if (title.value.trim() == "" || desc.value.trim() == "")
        return;        
    else {
        let taskdiv = document.createElement("div");
        taskdiv.className = "task";
        let heading = document.createElement("h3");
        heading.innerText = title.value;
        let para = document.createElement("p");
        para.innerText = desc.value;
        let icondiv = document.createElement("div");
        icondiv.className = "icondiv";
        let icon = document.createElement("i");
        icon.className = "fa-solid fa-x";

        icondiv.append(icon);
        taskdiv.append(heading, para, icondiv);
        list.appendChild(taskdiv);

        title.value = "";
        desc.value = "";

        icon.addEventListener("click", ()=> {
            taskdiv.remove();
        })

    }

});

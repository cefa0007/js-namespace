var Cefa0007 = {
    init: function () {
        let adamoDiv = document.createElement("div");
        adamoDiv.classList.add("box");
        adamoDiv.textContent = "cefa0007";
        let myBox = document.querySelector("#boxes");
        adamoDiv.addEventListener("click",Cefa0007.boxClicked);
        adamoDiv.addEventListener("mouseover",Cefa0007.boxMouseOver);
        adamoDiv.addEventListener("mouseout",Cefa0007.boxMouseOut);
        
        myBox.appendChild(adamoDiv);
    },
    boxClicked : function (ev) {
        ev.currentTarget.style.borderColor = "blue";
        ev.currentTarget.style.backgroundColor = "green";
    },
    boxMouseOver: function (ev) {
        ev.currentTarget.classList.toggle("highlight");
    },
    boxMouseOut: function (ev) {
        ev.currentTarget.classList.toggle("highlight");
    }
}




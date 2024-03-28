let add = document.querySelector(".add");
let save = document.querySelector(".save");
let r = document.querySelector(".r");
let output = document.querySelector(".output");
let savetext = document.querySelector(".savetext");

add.addEventListener("click", function () {
    output.innerHTML = +output.innerHTML + 1;
    save.classList.replace("notallow", "save");
});

save.addEventListener("click", function () {
    if (output.innerHTML == 0) {
        save.classList.replace("save", "notallow");
    }

    else {
        if (savetext.innerHTML == 0) {
            savetext.innerHTML = output.innerHTML;
        }

        else {
            savetext.innerHTML += "," + output.innerHTML;
        }
        output.innerHTML = 0;
    }
});

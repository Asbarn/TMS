// $(document).ready(function() {
//     var FirstTab = document.querySelector('#FirstTab');
//     for (var i = 0; i < data.length; i++) {
//         FirstTab.innerHTML += `<div class="row task"><h5>${data[i].firstName}</h5> <h7> ${data[i].lastName} </h7> <button> Редактировать</button><button> Выполнено</button><button> Удалить</button>  </div>`
//     }
// });
var fish = [{
        name: "Wash dishes",
        description: "none"
    },



];

var fish2 = [{
    name: "Go to the store",
    description: "none"
}, ];

var fish3 = [{
        name: "Go to study",
        description: "none"
    },

];




var table = document.querySelector('#FirstTab');
var table2 = document.querySelector('#SecondTab');
var table3 = document.querySelector('#ThirdTab');

var activeData, doneData, deletedData;

if (localStorage.getItem("ActiveTable") != null) {
    activeData = JSON.parse(localStorage.getItem("ActiveTable"));
    for (var i = 0; i < activeData.length; i++) {
        table.innerHTML += `<div class="row task"><h5><p>${activeData[i].name}</p></h5> <h7> <p>${activeData[i].description}</p> </h7> <button class="changeButton"> Редактировать</button><button class="doButton"> Выполнено</button><button class="deleteButton"> Удалить</button>  </div>`
    }

} else {
    activeData = fish;
    for (var i = 0; i < fish.length; i++) {
        table.innerHTML += `<div class="row task"><h5><p>${fish[i].name}</p></h5> <h7> <p>${fish[i].description}</p> </h7> <button class="changeButton"> Редактировать</button><button class="doButton"> Выполнено</button><button class="deleteButton"> Удалить</button>  </div>`
    }
}



if (localStorage.getItem("DoneTable") != null) {
    doneData = JSON.parse(localStorage.getItem("DoneTable"));
    for (var i = 0; i < doneData.length; i++) {
        table2.innerHTML += `<div class="row task"><h5><p>${doneData[i].name}</p></h5> <h7> <p>${doneData[i].description}</p> </h7> <button class="changeButton"> Редактировать</button> <button class="deleteButton"> Удалить</button>  </div>`
    }

} else {
    doneData = fish2;
    for (var i = 0; i < fish2.length; i++) {
        table2.innerHTML += `<div class="row task"><h5><p>${fish2[i].name}</p></h5> <h7> <p>${fish2[i].description}</p> </h7> <button class="changeButton"> Редактировать</button> <button class="deleteButton"> Удалить</button>  </div>`
    }
}


if (localStorage.getItem("DeletedTable") != null) {
    deletedData = JSON.parse(localStorage.getItem("DeletedTable"));
    for (var i = 0; i < deletedData.length; i++) {
        table3.innerHTML += `<div class="row task"><h5><p>${deletedData[i].name}</p></h5> <h7> <p>${deletedData[i].description}</p> </h7> <button class="restoreButton"> Восстановить</button>  </div>`
    }

} else {
    deletedData = fish3;
    for (var i = 0; i < fish3.length; i++) {
        table3.innerHTML += `<div class="row task"><h5><p>${fish3[i].name}</p></h5> <h7> <p>${fish3[i].description}</p> </h7> <button class="restoreButton"> Восстановить</button>  </div>`
    }
}





var chooseTab = document.querySelector('.chooseTab');
chooseTab.addEventListener('click', function(event) {
    if (event.target.classList.contains('firstTab')) {
        var i, testimonials_tab, tablinks;
        testimonials_tab = document.getElementsByClassName("testimonials_tab");
        for (i = 0; i < testimonials_tab.length; i++) {
            testimonials_tab[i].style.display = "none";
        }


        document.getElementById("FirstTab").style.display = "block";
        tablinks = document.getElementsByClassName("tablink");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].style.borderColor = "";
        }
        elmnt = event.target;

        elmnt.style.borderColor = "#fc5f45";
        elmnt.style.outline = "none";

    }
    if (event.target.classList.contains('secondTab')) {
        var i, testimonials_tab, tablinks;
        testimonials_tab = document.getElementsByClassName("testimonials_tab");
        for (i = 0; i < testimonials_tab.length; i++) {
            testimonials_tab[i].style.display = "none";
        }


        document.getElementById("SecondTab").style.display = "block";
        tablinks = document.getElementsByClassName("tablink");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].style.borderColor = "";
        }

        elmnt = event.target;
        elmnt.style.borderColor = "#fc5f45";
        elmnt.style.outline = "none";

    }
    if (event.target.classList.contains('thirdTab')) {
        var i, testimonials_tab, tablinks;
        testimonials_tab = document.getElementsByClassName("testimonials_tab");
        for (i = 0; i < testimonials_tab.length; i++) {
            testimonials_tab[i].style.display = "none";
        }


        document.getElementById("ThirdTab").style.display = "block";
        tablinks = document.getElementsByClassName("tablink");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].style.borderColor = "";
        }

        elmnt = event.target;
        elmnt.style.borderColor = "#fc5f45";
        elmnt.style.outline = "none";

    }

})
document.getElementById("defaultOpenTest").click();










var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("cancel")[0];
btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";

    document.getElementById("firstNameAdd").value = "";
    document.getElementById("lastNameAdd").value = "";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";

        document.getElementById("firstNameAdd").value = "";
        document.getElementById("lastNameAdd").value = "";
    }
}




var modalChanges = document.querySelector("#myChanges");
var changingPersonIndex;
var cancChanges = document.getElementsByClassName("cancel")[1];
$("body").on('click', '.changeButton', function() {
    modalChanges.style.display = "block";
    var text1 = document.querySelector("#firstNameChange");
    var text2 = document.querySelector("#lastNameChange");

    var tabs = document.getElementsByClassName("row");

    for (let i = 0; i < tabs.length; i++) {
        if (tabs[i].contains(event.target)) {
            let newPerson;
            newPerson = {
                name: this.previousElementSibling.previousElementSibling.innerText,
                description: this.previousElementSibling.innerText,

            }
            text1.value = newPerson.name;
            text2.value = newPerson.description;
            changingPersonIndex = i;

        }

    }

})
cancChanges.onclick = function() {
    modalChanges.style.display = "none";
    var text1 = document.getElementById("firstNameChange");
    var text2 = document.getElementById("lastNameChange");
    text1.value = "";
    text2.value = "";
}
window.onclick = function(event) {
    if (event.target == modalChanges) {
        modalChanges.style.display = "none";
        var text1 = document.getElementById("firstNameChange");
        var text2 = document.getElementById("lastNameChange");
        text1.value = "";
        text2.value = "";
    }
}
let changeHuman = document.querySelector('#changePerson');
changeHuman.addEventListener('click', function changePerson() {
    var text1 = document.querySelector("#firstNameChange");
    var text2 = document.querySelector("#lastNameChange");
    console.log(text1);
    let newPerson = {
        name: `${text1.value}`,
        description: `${text2.value}`
    };
    console.log(newPerson);
    var tabs = document.getElementsByClassName("row");

    for (let i = 0; i < tabs.length; i++) {




        if (changingPersonIndex == i && i < activeData.length) {

            tabs[i].innerHTML = `<h5><p>${newPerson.name}</p></h5> <h7> <p>${newPerson.description}</p> </h7> <button class="changeButton"> Редактировать</button><button class="doButton"> Выполнено</button><button class="deleteButton"> Удалить</button> `;

            activeData[i].name = newPerson.name;
            activeData[i].description = newPerson.description;

            localStorage.setItem("ActiveTable", JSON.stringify(activeData));

        } else if (changingPersonIndex == i && i >= activeData.length) {
            tabs[i].innerHTML = `<h5><p>${newPerson.name}</p></h5> <h7> <p>${newPerson.description}</p> </h7> <button class="changeButton"> Редактировать</button> <button class="deleteButton"> Удалить</button> `;
            doneData[i - activeData.length] = newPerson;
            doneData[i - activeData.length].name = newPerson.name;
            doneData[i - activeData.length].description = newPerson.description;
            localStorage.setItem("DoneTable", JSON.stringify(doneData));

        }

    }
    modalChanges.style.display = "none";
})



let addHuman = document.querySelector('#sendPerson');
addHuman.addEventListener('click', function addPerson() {

    var text1 = document.getElementById("firstNameAdd");
    var text2 = document.getElementById("lastNameAdd");

    let newPerson = {
        name: text1.value,
        description: text2.value,

    }


    table.innerHTML += `<div class="row task"><h5><p>${newPerson.name}</p></h5> <h7> <p>${newPerson.description}</p> </h7> <button class="changeButton"> Редактировать</button><button class="doButton"> Выполнено</button><button class="deleteButton"> Удалить</button>  </div>`
    activeData.push(newPerson);
    console.log(activeData);

    document.getElementById("firstNameAdd").value = "";
    document.getElementById("lastNameAdd").value = "";
    modal.style.display = "none";
    localStorage.setItem("ActiveTable", JSON.stringify(activeData));
    console.log(localStorage.getItem("ActiveTable"));

})

$("body").on('click', '.deleteButton', function() {
    var tabs = document.getElementsByClassName("row");

    for (let i = 0; i < tabs.length; i++) {
        if (tabs[i].contains(event.target)) {
            let newPerson;



            if (table.contains(tabs[i])) {
                newPerson = {
                    name: this.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerText,
                    description: this.previousElementSibling.previousElementSibling.previousElementSibling.innerText,

                }
                table3.innerHTML += `<div class="row task"><h5><p>${newPerson.name}</p></h5> <h7> <p>${newPerson.description}</p> </h7> <button class="restoreButton"> Восстановить</button>  </div>`
                tabs[i].innerHTML = ``;
                tabs[i].classList.remove('task');
                tabs[i].classList.remove('row');
                activeData.splice(i, 1);
                localStorage.setItem("ActiveTable", JSON.stringify(activeData));

            } else if (table2.contains(tabs[i])) {
                newPerson = {
                    name: this.previousElementSibling.previousElementSibling.previousElementSibling.innerText,
                    description: this.previousElementSibling.previousElementSibling.innerText,

                }
                table3.innerHTML += `<div class="row task"><h5><p>${newPerson.name}</p></h5> <h7> <p>${newPerson.description}</p> </h7> <button class="restoreButton"> Восстановить</button>  </div>`
                tabs[i].innerHTML = ``;
                tabs[i].classList.remove('task');
                tabs[i].classList.remove('row');

                doneData.splice(i - activeData.length, 1);

                console.log(i - activeData.length);
                localStorage.setItem("DoneTable", JSON.stringify(doneData));

            }
            deletedData.push(newPerson);

            localStorage.setItem("DeletedTable", JSON.stringify(deletedData));
            //document.location.reload(true); ///????
            break;
        }

    }

});


$("body").on('click', '.doButton', function() {



        var tabs = document.getElementsByClassName("row");

        for (let i = 0; i < tabs.length; i++) {
            if (tabs[i].contains(event.target)) {
                let newPerson = {
                    name: this.previousElementSibling.previousElementSibling.previousElementSibling.innerText,
                    description: this.previousElementSibling.previousElementSibling.innerText,

                }
                table2.innerHTML += `<div class="row task"><h5><p>${newPerson.name}</p></h5> <h7> <p>${newPerson.description}</p> </h7> <button class="changeButton"> Редактировать</button> <button class="deleteButton"> Удалить</button>  </div>`
                tabs[i].innerHTML = ``;
                tabs[i].classList.remove('task');
                tabs[i].classList.remove('row');
                activeData.splice(i, 1);
                localStorage.setItem("ActiveTable", JSON.stringify(activeData));


                doneData.push(newPerson);
                localStorage.setItem("DoneTable", JSON.stringify(doneData));
                break;
            }

        }

    }

);


$("body").on('click', '.restoreButton', function() {



        var tabs = document.getElementsByClassName("row");

        for (let i = 0; i < tabs.length; i++) {
            if (tabs[i].contains(event.target)) {
                let newPerson = {
                    name: this.previousElementSibling.previousElementSibling.innerText,
                    description: this.previousElementSibling.innerText,

                }
                table.innerHTML += `<div class="row task"><h5><p>${newPerson.name}</p></h5> <h7> <p>${newPerson.description}</p> </h7> <button class="changeButton"> Редактировать</button><button class="doButton"> Выполнено</button><button class="deleteButton"> Удалить</button>  </div>`
                tabs[i + 1].innerHTML = ``;
                tabs[i + 1].classList.remove('task');
                tabs[i + 1].classList.remove('row');
                deletedData.splice(i - (activeData.length + doneData.length), 1);
                console.log(tabs[i]);
                localStorage.setItem("DeletedTable", JSON.stringify(deletedData));


                activeData.push(newPerson);
                localStorage.setItem("ActiveTable", JSON.stringify(activeData));
                break;
            }

        }

    }

);
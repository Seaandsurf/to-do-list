// creation du "X" button pour chaque item:
window.onload = function () {
    added();
    closed();
    checked();
};

function added() {
    let myNodelist = document.getElementsByTagName("li");
    let boxy = document.getElementById("box-id");
    let todo = document.getElementById("to-do");
    for (i = 0; i < myNodelist.length; i++) {
        // Creation d'un <span class="close"> x <span>:
        let span = document.createElement("SPAN");
        let txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        myNodelist[i].appendChild(span);
    }
}

// Cliquer sur "x" button pour effacer la ligne:
function closed() {
    let close = document.getElementsByClassName("close");

    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            let div = this.parentElement;
            div.style.display = "none";

        }
    }
}

// Ajouter un "✔" symbole quand tu cliques sur la tache:
function checked() {
    let list = document.querySelector('ul');
    list.addEventListener('click', function (ev) {
        if (ev.target.tagName === 'LI') {
            ev.target.classList.toggle('checked');
        }
    }, false);
}

function addnew() {
    let close = document.getElementsByClassName("close");

    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            let div = this.parentElement;
            div.style.display = "none";
        }
    }
// fonction de création de la nouvelle tâche:
    let li = document.createElement("li");
    let inputs = document.getElementById("new").value;
    let t = document.createTextNode(inputs);
    li.appendChild(t);
    if (inputs === '') {
        // Si rien est ecrit et que le button est cliqué:
        alert("Come on, On a TOUJOURS quelque chose a faire!");
    } else {
        // Ajout d'une <li> pour la nouvelle tahce:
        document.getElementById("list").appendChild(li);
    }
    
    document.getElementById("new").value = "";
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            let div = this.parentElement;
            div.style.display = "none";
        }
    }

     scrollBarFix()
}


    document.getElementsByClassName('addBoxButton').addEventListener('click', function() {
        const boxId = document.getElementById('box-id');
        const newBox = document.createElement('div');
        newBox.className = 'box';
        newBox.innerHTML = `
            <div class="box__todo" id="to-do">
                <h1 class="box__todo__title">Nouvelle Liste de tâches:</h1>
                <div class="box__todo__inputbtn">
                    <input type="text" class="box__todo__inputbtn__new-act" placeholder="What do you need to do next?">
                    <button class="box__todo__inputbtn__add-new">Add</button>
                </div>
            </div>
            <ul class="box__list">
                <!-- Les tâches seront ajoutées ici -->
            </ul>
        `;
        boxId.appendChild(newBox);
    });
;




























//JSON SHIT -----------------------------------------


// function saved() {
//     const tab = [];
//     document.querySelectorAll("box__list, li").forEach((li) => {
//         tab.push({
//             text: li.textContent,
//             // completed: li.getElementsByClassName("complet"),
//         });
//     });
//     localStorage.setItem("tab", JSON.stringify(tab));
//   }

//   function loadtab() {
//     const tab = JSON.parse(localStorage.getItem("tab")) || [];
//     tab.forEach((task) => {
//         const li = document.createElement("li");
//         li.textContent = task.text;
//         list.appendChild(li);
//     });
//   }




//active button with .active class

// $(function () {
//     $('.add_new').click(function () {

//         $(this).toggleClass('active');
//         setTimeout(function () {
//             $('.add_new').removeClass('active');
//         }, 1100);
//     });
// });




//JSON SHIT -----------------------------------------



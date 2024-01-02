// Create a "close" button and append it to each list item

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
        // Creation d'un <span class="close"> x <span>
        let span = document.createElement("SPAN");
        let txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        myNodelist[i].appendChild(span);
    }
}

// Click on a "x" button to delete the current list item
function closed() {
    let close = document.getElementsByClassName("close");

    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            let div = this.parentElement;
            div.style.display = "none";

        }
    }
}

// Add a "checked" symbol when clicking on a list item
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

    let li = document.createElement("li");
    let inputs = document.getElementById("new").value;
    let t = document.createTextNode(inputs);
    li.appendChild(t);
    if (inputs === '') {
        alert("Come on, On a TOUJOURS quelque chose a faire!");
    } else {
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
            var div = this.parentElement;
            div.style.display = "none";
        }
    }

    // scrollBarFix()
}





















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



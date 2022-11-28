let noteList = [];

let view = "grid"; //default view is grid-view
let id = 0;

function validateForm(event){
    event.preventDefault()
    let titleName = document.getElementById("titleName").value;
    let notesName = document.getElementById("notesName").value
    //alert(titleName+""+notesName)
    if(titleName == null || titleName == ""){
       // alert("Hello")
        document.getElementById("titleName").style.border = "2px solid red";
        document.getElementById("titlespan").innerHTML="Title can not be blank";
        return false;
    }
    else if(notesName == null || notesName ==""){
        document.getElementById("notesName").style.border = "2px solid red";
        //alert("hello")
        document.getElementById("span1").innerHTML="Note can not be blank";
        //alert("hello1")
        return false;
    }
    else{
        let note = {
            "id": id,
            "title": titleName,
            "notes": notesName
        }
        id++;
        noteList.push(note)
        alert("form submitted");
        document.querySelector("form").reset();
        return true;
    }
}

function displayNotes(){

    let y = 0;
    let sec = document.querySelectorAll("section");
    for(let i =0; i<sec.length; i++){
        sec[i].remove();
    }

    noteList.forEach(note =>{
        let section = document.createElement("section");
        let body = document.getElementById("note-container");
        body.appendChild(section);
        let h2 = document.createElement("h2");
        let h2Text = document.createTextNode(note.title);
        h2.appendChild(h2Text);
        section.appendChild(h2);

        let p = document.createElement("p"); 
        let pText = document.createTextNode(note.notes);
        p.appendChild(pText);
        section.appendChild(p);
        let btn = document.createElement("button");
        
        let btntext = document.createTextNode("Delete Note");
        btn.appendChild(btntext);
        btn.addEventListener("click", function(){
            deleteUser(y);
            y++;
        })
        section.appendChild(btn);
    })
}


function deleteUser(id1){
   
    noteList.splice(id1, 1);
    displayNotes();
    
}

const config = {
    apiKey: "AIzaSyA_GYjnLsDZvmgUDiGenC19u3ulir5lEj4",
    authDomain: "fir-note-app-8b4a1.firebaseapp.com",
    projectId: "fir-note-app-8b4a1",
    storageBucket: "fir-note-app-8b4a1.appspot.com",
    messagingSenderId: "3668182268",
    appId: "1:3668182268:web:a3e6abf4dcb8df0d404379"
};
firebase.initializeApp(config);
const db = firebase.firestore();

//var Create_Modal = document.getElementById('exampleModal')
var Create_Modal = new bootstrap.Modal(document.getElementById('Create_Modal'), {
  keyboard: false
})

var Update_Modal = new bootstrap.Modal(document.getElementById('Update_modal'), {
  keyboard: false
})

let dashboard = document.getElementById("dashboard");
const show_important = document.getElementById("show_important");
const modal_form_create = document.getElementById("modal_form_create");
const modal_form_update = document.getElementById("modal_form_update");
const search_bar = document.getElementById("search_bar");

const addNote = (note, id) => {
  let timestamp = note.date.toDate();
  var date = new Date(timestamp);
  let html = document.createElement("div");
  html.classList = "col-md-4 note";
  html.id = id;

  if(note.important === true){
    html.classList += " order-first";
  }

  let html_body = `
    <div class="card mb-2">

      <div class="card-header d-flex flex-row justify-content-between">
        <h5 class="text-middle">
          ${note.title}
        </h5>
        <input type="checkbox" class="btn-check" id="check_${id}" active="${note.important}" data-id="${id}" data-click="important">
        <label class="btn btn-sm btn-outline-warning" for="check_${id}">
          Important
          <svg xmlns="http://www.w3.org/2000/svg" class="mb-1" height="14px" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
          </svg>
        </label>
      </div>

      <div class="card-body">
        <p class="card-text">
        ${note.body}
        </p>
      </div>

      <div class="card-footer d-flex justify-content-between" data-id="${id}">
        <small class="card-subtitle my-auto text-muted">
        ${date.getFullYear() + "/" + date.getMonth() + "/" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()}
        </small>
        <div>
          <button class="btn btn-sm btn-info">
            Update
          </button>
          <button class="btn btn-sm btn-danger">
            Delete
          </button>
        </div>
      </div>

    </div>
  `;
  html.innerHTML = html_body;

  dashboard.appendChild(html);
  
  if(note.important === true){
    let check_id = "check_" + id;
    document.getElementById(check_id).checked = true;
  }
}

//Update Note
const updateNote = (data, id) => {
  let note = document.getElementById(id);
  note.childNodes[1].childNodes[1].childNodes[1].innerText = data.title;
  note.childNodes[1].childNodes[3].childNodes[1].innerText = data.body;
  //note.childNodes[1].childNodes[1].childNodes[2].checked = data.important;

  //let timestamp = note.date.toDate();
  //let date = new Date(timestamp);
  //let time = date.getFullYear() + "/" + date.getMonth() + "/" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
  //note.childNodes[1].childNodes[5].childNodes[1].innerText = time;
  if(data.important == true){
    note.classList.add("order-first")
  } else{
    note.classList.remove("order-first")
  }
}

// real-time listener
const unsub = db.collection('notes').onSnapshot(snapshot => {
  snapshot.docChanges().forEach(change => {
    const doc = change.doc;
    //console.log(change.type);
    if(change.type === 'added')
    {
      addNote(doc.data(), doc.id)
    } 
    else if (change.type === 'removed')
    {
      deleteNote(doc.id);
    } 
    else if(change.type == "modified")
    {
      //console.log(doc.data(), doc.id)
      updateNote(doc.data(), doc.id);
    }
  });
});

// save documents
modal_form_create.addEventListener('submit', e => {
  e.preventDefault();

  const now = new Date();
  const note = {
    title: modal_form_create.modal_title.value,
    body: modal_form_create.modal_body.value,
    important: modal_form_create.modal_important.checked,
    date: firebase.firestore.Timestamp.fromDate(now)
  };

  db.collection('notes').add(note).then(() => 
  {
    modal_form_create.reset();
    //Create_Modal.hide();
    Create_Modal.hide();
  }
    ).catch(err => 
  {
    console.log(err);
  }
  );
});

//Delete node
const deleteNote = (id) => {
  const note = document.getElementById(id);
  note.remove();
};

// deleting data
dashboard.addEventListener('click', e => {
  if(e.target.innerText === 'Delete'){
    const id = e.target.parentElement.parentElement.getAttribute('data-id');
    //console.log(id);
    db.collection('notes').doc(id).delete().then(() => {
      console.log('Note deleted');
    });
  } else if(e.target.getAttribute("data-click") === "important"){
    //Changing importance
    const id = e.target.getAttribute("data-id");
    let checked = e.target.checked;
    db.collection("notes").doc(id).update({
      important: checked
    }).then(() => {
      console.log("Updated important");
    }).catch(err => {
      console.log(err);
    })
  } else if(e.target.innerText === 'Update'){
    //Update
    const id = e.target.parentElement.parentElement.getAttribute('data-id');
    Update_Modal.show();
    db.collection("notes").doc(id).get().then((doc) => {
      document.getElementById("modal_title_update").value = doc.data().title;
      document.getElementById("modal_body_update").value = doc.data().body;
      document.getElementById("modal_important_update").checked = doc.data().important;
      document.getElementById("hidden_id").value = id;
    });
  }
});

//Update in modal
Update_modal.addEventListener("submit", e => {
  e.preventDefault();

  const id = document.getElementById("hidden_id").value;
  db.collection("notes").doc(id).update({
      body: modal_body_update.value,
      title: modal_title_update.value,
      important: modal_important_update.checked
  }).then(()=>{
      console.log("updated");
      Update_Modal.hide();
      //location.reload(); 
  }).catch(err => {
      console.log(err)
  })
})

//Searchbar
search_bar.addEventListener("input", () => {
  let notes = document.querySelectorAll(".note");
  let term = search_bar.value.toLowerCase();
  notes.forEach(note => {
    let note_title = note.childNodes[1].childNodes[1].childNodes[1].innerText.toLowerCase();
    if(note_title.includes(term)){
      //console.log("INCLUDES!");
      note.classList.remove("d-none")
    } else{
      note.classList.add("d-none")
    }
  })
  //console.log(term);
})

show_important.addEventListener("change", () => {
  const notes = document.querySelectorAll(".note");
  if(show_important.checked === true){
    notes.forEach(note => {
      if(!note.childNodes[1].childNodes[1].childNodes[3].checked){
        note.classList.add("d-none");
      }
    })
  } else{
    notes.forEach(note => {
      note.classList.remove("d-none");
    })
  }
})

/*
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
    myInput.focus()
})
*/
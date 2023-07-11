import './App.css';
import { useState } from 'react';
import { storage } from "./firebase";
import { ref, uploadBytes } from 'firebase/storage'
import { v4 } from 'uuid';

function App() {
  const [pdfUpload, setPdfUpload] = useState(null);
  const uploadPdf = () => {
    if (pdfUpload == null) return;
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let type = getType(pdfUpload.type);
    const pdfRef = ref(storage, `resume/${name}_${email}.${type} ${v4()}`);
    uploadBytes(pdfRef, pdfUpload).then(() => {
      alert("Resume Uploaded");
    })

    function getType(type){
      console.log(type.length)
      let temp = '';
      let slashFound = false
      for(let i = 0; i < type.length; i++){
        if(slashFound){
          temp += type[i];
        }
        if(type[i] === '/'){
          slashFound = true;
        }
      }
      return temp
    }
  };

  return (
    <div className="App">
      <form className="form">
        <label htmlFor="name">Name : </label>
        <input id="name" type="text" required/>
        <label htmlFor="email">Email : </label>
        <input id="email" type="email" required/>
        <input type="file" onChange={(event) => setPdfUpload(event.target.files[0])} required/>
        <button className="cta" type="button" onClick={uploadPdf}>Upload Resume</button>
      </form>
    </div>
  );
}

export default App;

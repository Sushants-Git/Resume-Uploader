import './App.css';
import { useState,useEffect } from 'react';
import { storage } from "./firebase";
import { ref,uploadBytesm, listAll, getDownloadURL } from 'firebase/storage'
import {v4} from 'uuid';

function App() {
  const [pdfList, setPdfList] = useState([]);
  const pdfListRef = ref(storage, "resume/");

  useEffect(() => {
    listAll(pdfListRef).then(res => {
      res.items.forEach((item) => {
        let filename = getFileName(item._location.path_)
        getDownloadURL(item).then(url => {
          setPdfList(prev => [...prev, {url,filename}]);
        })

        function getFileName(name){
          let splitString = name.split("");
          for(let i = 0; i < 7; i++){
            splitString.shift();
          }
          for(let i = 0; i < 36; i++){
            splitString.pop();
          }
          splitString = splitString.join("");
          return splitString
        }
      })
    });
  },[])

  return (
    <div className="App">
      {pdfList.map(({url,filename}) => <div><a key={v4()} href={url}>{filename}</a></div>)}
    </div>
  );
}

export default App;

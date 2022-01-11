import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import { toEditorSettings } from 'typescript';




const columns = [
  {
    name: "First Name",
    selector: "first name",
    sortable: true
    
  },
  {
    name: "Last Name",
    selector: "last name",
    sortable: true
  },
  {
    name: "Age",
    selector: "age",
    sortable: true,
    right: true
  }
];

export default function App() {
  return (
    <div className="App">
      <div>
        
        columns={columns}
                
        defaultSortField="title"

        pagination
               
     </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

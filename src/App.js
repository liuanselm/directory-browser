import './App.css';
import Directory from './Components/Directory/Directory';
import file from './file.json'

function App() {
  return (
    <Directory file={file}/>
  );
}

export default App;

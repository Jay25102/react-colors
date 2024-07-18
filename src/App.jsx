import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import ColorsIndex from './ColorsIndex';
import FilterColorDetails from './FilterColorDetails';
import NewColorForm from './NewColorForm';
import { useState } from 'react';

function App() {
  const initialState = [
    {
      name: "red",
      colorCode: "#ff0000"
    },
    {
      name: "green",
      colorCode: "#008000"
    },
    {
      name: "blue",
      colorCode: "#0000ff"
    }
  ]

  const [colors, setColors] = useState(initialState);

  const addColor = function(colorObj) {
    setColors(colors => [colorObj, ...colors]);
}

  return (
    <div>
      <h1>Color Factory</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/colors" element={<ColorsIndex colors={colors}/>}/>
          <Route path="/colors/:color" element={<FilterColorDetails colors={colors}/>}/>
          <Route path="/colors/new" element={<NewColorForm addColor={addColor}/>}/>
          <Route path="/*" element={<Navigate to="/colors"/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

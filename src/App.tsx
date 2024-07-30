import React, {useState} from 'react';
import './App.css';
import {RequestingData} from "./api/request";
import {Result} from "./types/typesResponse";

function App() {
  const [name, setName] = useState<string>('Сейчас name пустой, нужно нажать на кнопку и отправится запрос');
  // На данный момент запрос не может корректно отработать, так как взможно сервер не разрешает CORS запросы
  const handleSubmit = async ()=>{
      try {
          const {data} = await RequestingData();
          setName(getName(data.result.result));
      }catch (error){
          console.log('Произошла некая ошибка:', error);
      }
  }

  const getName = (response : Result[]) => {
      return response[0].__name
  }

  return (
    <div className="App">
     <span>{name}</span>
     <button onClick={handleSubmit} className="mainButton">Отправить POST запрос</button>
    </div>
  );
}

export default App;



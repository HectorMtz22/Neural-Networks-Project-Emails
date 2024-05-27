import React, { createContext, useEffect, useState } from 'react'
import * as tf from '@tensorflow/tfjs'
import Header from './components/Header'
import styles from './App.module.css'
import Sidebar from './components/Sidebar'
import Email from './components/Email'
import ListOfEmails from './components/ListOfEmails'
import { Provider } from './context/root'

const App = () => {
  const [model, setModel] = useState(null)
  const [prediction, setPrediction] = useState(null)
  const Context = createContext()

  useEffect(() => {
    // Cargar el modelo convertido
    const loadModel = async () => {
      const model = await tf.loadLayersModel('/model-js/model.json')
      setModel(model)
    }

    loadModel()
  }, [])

  const makePrediction = async (inputData) => {
    if (model) {
      // Tokenizar el texto
      const inputTensor = tf.tensor([inputData])
      const output = model.predict(inputTensor)
      const prediction = output.dataSync()
      setPrediction(prediction)
    }
  }

  return (
    <Provider>
      {/* <h1>TensorFlow.js en React</h1>
      <button onClick={() => makePrediction('text')}>
        Hacer Predicción
      </button>
      {prediction && <div>Predicción: {prediction}</div>} */}
      <Header />
      <main className={styles.content}>
        <Sidebar />
        <ListOfEmails />
      </main>
      <Email />
    </Provider>
  )
}

export default App

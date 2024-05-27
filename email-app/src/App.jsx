import Header from './components/Header'
import styles from './App.module.css'
import Sidebar from './components/Sidebar'
import Email from './components/Email'
import ListOfEmails from './components/ListOfEmails'
import { Provider } from './context/root'

const App = () => {
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

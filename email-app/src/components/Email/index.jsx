import { useState } from 'react'
import styles from './styles.module.css'

const Email = () => {
  const [isVisible, setIsVisible] = useState(true)
  return (
    <aside className={styles.email_content}>
      <section className={styles.email_header}>
        <h2>Nuevo Correo</h2>
        <button onClick={() => setIsVisible(!isVisible)}>
          <h2>{isVisible ? 'X' : '˄'}</h2>
        </button>

      </section>
      {isVisible && (
        <section className={styles.email_container}>
          <p>
            <strong>Para: </strong>
            <span>
              you@ClasifAI.com
            </span>
          </p>
          <input type='text' name='subject' placeholder='Título' />
          <textarea name='content' id='content' cols='30' rows='10' placeholder='Contenido' />
        </section>

      )}
    </aside>
  )
}

export default Email

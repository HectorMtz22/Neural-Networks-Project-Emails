import { useState } from 'react'
import styles from './styles.module.css'

const Email = () => {
  const [isVisible, setIsVisible] = useState(true)
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    setTitle('')
    setContent('')
  }
  return (
    <aside className={styles.email_content}>
      <section className={styles.email_header}>
        <h2>Nuevo Correo</h2>
        <button onClick={() => setIsVisible(!isVisible)}>
          <h2>{isVisible ? 'X' : '˄'}</h2>
        </button>

      </section>
      {isVisible && (
        <form className={styles.email_container} onSubmit={handleSubmit}>
          <p>
            <strong>Para: </strong>
            <span>
              you@ClasifAI.com
            </span>
          </p>
          <input
            type='text'
            name='subject'
            placeholder='Título'
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <textarea
            name='content'
            id='content'
            cols='30'
            rows='10'
            placeholder='Contenido'
            onChange={(e) => setContent(e.target.value)}
            value={content}
          />

          <button className={styles.button}>
            Enviar
          </button>
        </form>

      )}
    </aside>
  )
}

export default Email

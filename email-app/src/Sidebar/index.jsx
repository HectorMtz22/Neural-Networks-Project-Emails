import styles from './styles.module.css'

const Sidebar = () => {
  return (
    <article className={styles.sidebar}>
      <section className={styles.active}>
        Importante
      </section>
      <section>
        Pregunta
      </section>
      <section>
        Confirmación
      </section>
      <section>
        Informativo
      </section>
    </article>
  )
}

export default Sidebar

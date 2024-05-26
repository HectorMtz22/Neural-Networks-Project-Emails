import styles from './styles.module.css'

const ListOfEmails = () => {
  return (
    <article className={styles.content}>
      <h2 className={styles.not_found}>
        No tienes correos en esta categoría
      </h2>
    </article>
  )
}

export default ListOfEmails

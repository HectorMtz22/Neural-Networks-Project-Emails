import useEmails from '../../hooks/useEmails'
import styles from './styles.module.css'

const ListOfEmails = () => {
  const { emails } = useEmails()
  return (
    <article className={styles.content}>
      {emails.map((email, index) => (
        <section key={index} className={styles.email}>
          <h3>{email.title}</h3>
          <p>{email.content}</p>
        </section>
      ))}
      {
        emails.length === 0 && (
          <h2 className={styles.not_found}>
            No tienes correos en esta categoría
          </h2>
        )
      }
    </article>
  )
}

export default ListOfEmails

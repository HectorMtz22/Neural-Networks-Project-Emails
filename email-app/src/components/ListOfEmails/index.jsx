import useEmails from '../../hooks/useEmails'
import styles from './styles.module.css'

const ListOfEmails = () => {
  const { emails } = useEmails()
  if (!emails) return null
  return (
    <article className={styles.content}>
      {emails.map((email) => (
        <section key={email.id} className={styles.email}>
          <section className={styles.email_header}>
            <h3>
              Título:
              <strong> {email.title}
              </strong>
            </h3>
            <button>
              <h2>X</h2>
            </button>
          </section>
          <hr />
          <span>{email.content}</span>
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

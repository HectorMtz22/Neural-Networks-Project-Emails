import useEmails from '../../hooks/useEmails'
import styles from './styles.module.css'

const ListOfEmails = () => {
  const { emails, deleteEmail } = useEmails()
  if (!emails) return null

  const handleRemove = (id) => {
    const isRemove = confirm('¿Estás seguro de eliminar este correo?')
    isRemove && deleteEmail(id)
  }

  return (
    <article className={styles.content}>
      {emails.map((email) => (
        <section key={email.id} className={styles.email}>
          <section className={styles.email_header}>
            <h3>
              &gt;
              <strong> {email.title}
              </strong>
            </h3>
            <button onClick={() => handleRemove(email.id)}>
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

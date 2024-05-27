import useEmails from '../../hooks/useEmails'
import useTabs from '../../hooks/useTabs'
import styles from './styles.module.css'

// const tabs = [
//   'Importante',
//   'Pregunta',
//   'Confirmación',
//   'Informativo'
// ]

const tabs = [
  { title: 'Importante', icon: '⚠️', key: 'important' },
  { title: 'Pregunta', icon: '❓', key: 'question' },
  { title: 'Confirmación', icon: '👍', key: 'confirm' },
  { title: 'Informativo', icon: 'ℹ️', key: 'info' }
]

const Sidebar = () => {
  const { activeTab, setTab } = useTabs()
  const { getAllEmails } = useEmails()
  const emails = getAllEmails()
  console.log(activeTab)

  return (
    <article className={styles.sidebar}>
      <span>Bandeja de Entrada</span>
      {tabs.map((tab, index) => (
        <section
          key={index}
          className={tab.key === activeTab ? styles.active : ''}
          onClick={() => setTab(tab.key)}
        >
          <span>
            {tab.icon}
          </span>
          <span>
            {tab.title}
          </span>
          <span>
            {emails.filter((email) => email.key === tab.key).length}
          </span>
        </section>
      ))}

    </article>
  )
}

export default Sidebar

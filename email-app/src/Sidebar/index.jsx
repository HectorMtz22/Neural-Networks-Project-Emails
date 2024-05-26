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
  const activeTab = 0
  return (
    <article className={styles.sidebar}>
      <span>Bandeja de Entrada</span>
      {tabs.map((tab, index) => (
        <section
          key={index}
          className={index === activeTab ? styles.active : ''}
        >
          <span>
            {tab.icon}
          </span>
          {tab.title}
        </section>
      ))}

    </article>
  )
}

export default Sidebar

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
          {tab.title}
        </section>
      ))}

    </article>
  )
}

export default Sidebar

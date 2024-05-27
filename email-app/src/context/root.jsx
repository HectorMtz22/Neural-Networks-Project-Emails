import { createContext, useEffect, useState } from 'react'

const Context = createContext()

const initialContext = {
  activeTab: '/',
  emails: localStorage.getItem('emails') ? JSON.parse(localStorage.getItem('emails')) : []
}

const Provider = ({ children }) => {
  const [activeTab, setActiveTab] = useState('/')
  const [emails, setEmails] = useState(initialContext.emails)

  useEffect(() => {
    const param = new URLSearchParams(window.location.search).get('tab') ?? '/'
    setActiveTab(param)
  }, [])

  return (
    <Context.Provider value={{ activeTab, emails, setActiveTab, setEmails }}>
      {children}
    </Context.Provider>
  )
}

export { Provider, Context }

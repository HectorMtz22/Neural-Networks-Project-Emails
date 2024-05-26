import { useState, useEffect } from 'react'

const tabs = [
  { title: 'Importante', icon: '⚠️', key: 'important' },
  { title: 'Pregunta', icon: '❓', key: 'question' },
  { title: 'Confirmación', icon: '👍', key: 'confirm' },
  { title: 'Informativo', icon: 'ℹ️', key: 'info' }
]
const useEmails = () => {
  const [emails, setEmails] = useState([])

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('emails')) ?? []
    setEmails(data)
  }, [])

  const addEmail = (email) => {
    const classificationNumber = Math.round(Math.random() * 3)
    const newEmail = { ...email, id: emails.length + 1, key: tabs[classificationNumber].key }
    setEmails((prevEmails) => [...prevEmails, newEmail])
  }

  return { emails, addEmail }
}

export default useEmails

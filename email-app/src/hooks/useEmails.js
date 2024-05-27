import { useState, useEffect } from 'react'
import useTabs from './useTabs'

const tabs = [
  { title: 'Importante', icon: '⚠️', key: 'important' },
  { title: 'Pregunta', icon: '❓', key: 'question' },
  { title: 'Confirmación', icon: '👍', key: 'confirm' },
  { title: 'Informativo', icon: 'ℹ️', key: 'info' }
]
function useEmails () {
  const [emails, setEmails] = useState([])
  const { activeTab } = useTabs()

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('emails')) ?? []
    setEmails(data)
  }, [])

  function addEmail (email) {
    const classificationNumber = Math.round(Math.random() * 3)
    const newEmail = { ...email, id: emails.length + 1, key: tabs[classificationNumber].key }
    const newList = emails.concat(newEmail)
    localStorage.setItem('emails', JSON.stringify(newList))
    console.log('yes men')
    setEmails(newList)
    console.log('yes men')
  }

  const getEmails = () => {
    return emails.filter((email) => email.key === activeTab)
  }

  const getAllEmails = () => {
    return emails
  }

  const deleteEmail = (id) => {
    const newList = emails.filter((email) => email.id !== id)
    localStorage.setItem('emails', JSON.stringify(newList))
    setEmails(newList)
  }

  return { emails: getEmails(), addEmail, getAllEmails, deleteEmail }
}

export default useEmails

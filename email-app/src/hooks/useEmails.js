import { useState, useEffect } from 'react'

const useEmails = () => {
  const [emails, setEmails] = useState([])

  const fetchEmails = async () => {
    // from localStorage
    const data = await JSON.parse(localStorage.getItem('emails')) ?? []
    setEmails(data)
  }

  useEffect(() => {
    fetchEmails()
  }, [])

  return { emails }
}

export default useEmails

import { useEffect, useContext, useRef } from 'react'
import { Context } from '../context/root'
import useTabs from './useTabs'
import make from '../services/makePrediction'

import * as tf from '@tensorflow/tfjs'

const makePrediction = async (inputData) => {
  const model = await tf.loadLayersModel('/model-js/model.json')
  if (model) {
    // Tokenizar el texto
    const inputTensor = tf.tensor([inputData])
    const output = model.predict(inputTensor)
    const prediction = output.dataSync()
    return prediction
  }
}

function useEmails () {
  const { emails, setEmails } = useContext(Context)
  const { activeTab } = useTabs()
  const generatorRef = useRef(make())

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('emails')) ?? []
    setEmails(data)
  }, [])

  function addEmail (email) {
    const key = generatorRef.current.next().value
    const newEmail = { ...email, id: emails.length + 1, key }
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

import { useState, useEffect } from 'react'

// Hook que mantiene el estado de la tab activa con el urlparam
function useTabs () {
  const [activeTab, setActiveTab] = useState('/')
  useEffect(() => {
    const param = new URLSearchParams(window.location.search).get('tab') ?? '/'
    setActiveTab(param)
  }, [])

  const setTab = (tab) => {
    const url = new URL(window.location)
    url.searchParams.set('tab', tab)
    window.history.replaceState({}, '', url)
    setActiveTab(tab)
  }

  return { activeTab, setTab }
}

export default useTabs

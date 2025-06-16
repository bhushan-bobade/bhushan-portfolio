"use client"

import { useEffect } from "react"

export function ScrollToSection() {
  useEffect(() => {
    // Handle hash changes for direct links
    const handleHashChange = () => {
      const hash = window.location.hash
      if (hash) {
        const id = hash.replace("#", "")
        const element = document.getElementById(id)
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: "smooth" })
          }, 100)
        }
      }
    }

    // Initial check for hash in URL
    if (window.location.hash) {
      handleHashChange()
    }

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange)
    return () => window.removeEventListener("hashchange", handleHashChange)
  }, [])

  return null
}

'use client'
import React from 'react'
import { useTheme } from '../context/ThemeContext'

const ThemeToggle: React.FC = () => {
  const { isDark, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      style={{
        position: 'fixed',
        top: '20px',
        right: '20px',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        fontSize: '28px',
        color: 'var(--text-color)',
        transition: 'all 0.3s ease',
        zIndex: 9999,
        padding: '8px',
        borderRadius: '8px',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.2)'
        e.currentTarget.style.color = isDark ? '#fbbf24' : '#3b82f6'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)'
        e.currentTarget.style.color = 'var(--text-color)'
      }}
    >
      <i className={isDark ? 'fas fa-sun' : 'fas fa-moon'}></i>
    </button>
  )
}

export default ThemeToggle
import type { CSSProperties } from 'react'

interface WordRevealProps {
  text: string
  auto?: boolean
}

export default function WordReveal({ text, auto = false }: WordRevealProps) {
  const words = text.split(' ')

  return (
    <span
      aria-label={text}
      className={`word-reveal ${auto ? 'word-reveal--auto' : ''}`}
    >
      {words.map((word, index) => (
        <span
          aria-hidden="true"
          className="word-reveal__word"
          key={`${word}-${index}`}
          style={{ '--word-index': index } as CSSProperties}
        >
          {word}
          {index < words.length - 1 ? '\u00A0' : ''}
        </span>
      ))}
    </span>
  )
}

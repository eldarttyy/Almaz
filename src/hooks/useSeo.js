import { useEffect } from 'react'

const DEFAULT_DESCRIPTION =
  'Алмазная резка бетона, бурение, стенорезные работы и резка полов в Бишкеке и по всему Кыргызстану. Профессиональное оборудование, пылеконтроль, бесплатная смета.'

function setMeta(name, content) {
  if (!content) return
  let tag = document.querySelector(`meta[name="${name}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute('name', name)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

// Lightweight, dependency-free per-route document title + meta description.
// Google renders client-side JS, so updating these on navigation keeps each
// route distinct in search results and browser history.
//
// noIndex is for routes the static host always serves with a 200 status
// (e.g. the 404 page, since client-side routing can't return a real 404) —
// it keeps those out of search results.
export default function useSeo(title, description = DEFAULT_DESCRIPTION, { noIndex = false } = {}) {
  useEffect(() => {
    const fullTitle = title ? `${title} | РезМастер` : 'Алмазная резка бетона и бурение в Бишкеке | РезМастер'
    document.title = fullTitle
    setMeta('description', description)
    setMeta('og:title', fullTitle)
    setMeta('og:description', description)
    setMeta('robots', noIndex ? 'noindex, nofollow' : 'index, follow')
  }, [title, description, noIndex])
}

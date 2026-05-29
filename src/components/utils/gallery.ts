import type { Artwork, SavedArtwork } from "../types/artwork"

const KEY = "gallery"

export function getSaved(): SavedArtwork[] {
  const raw = localStorage.getItem(KEY)
  if (!raw) return []
  return JSON.parse(raw) as SavedArtwork[]
}

export function saveArtwork(artwork: Artwork): void {
  const current = getSaved()
  if (current.find((s) => s.artwork.id === artwork.id)) return
  localStorage.setItem(KEY, JSON.stringify([...current, { artwork, note: "" }]))
}

export function deleteArtwork(id: number): void {
  const updated = getSaved().filter((s) => s.artwork.id !== id)
  localStorage.setItem(KEY, JSON.stringify(updated))
}

export function updateNote(id: number, note: string): void {
  const updated = getSaved().map((s) =>
    s.artwork.id === id ? { ...s, note } : s
  )
  localStorage.setItem(KEY, JSON.stringify(updated))
}
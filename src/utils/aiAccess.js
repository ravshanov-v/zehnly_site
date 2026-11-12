const ACCESS_PARTS = [
  "eWkXJVBaZHYOeVctRF92FTRnWWZH",
  "XlFZA1NUZChkWWBVB1V8DV5fNUQk",
  "G3RieEYzRg9DPgI="
]

const ACCESS_MASK = "889d2b68802f583fe50952c1f497f3262a74"

let cachedKey = null

export function getGeminiApiKey() {
  if (cachedKey !== null) return cachedKey

  try {
    const binary = window.atob(ACCESS_PARTS.join(''))
    const bytes = Uint8Array.from(binary, (character) => character.charCodeAt(0))
    const mask = new TextEncoder().encode(ACCESS_MASK)

    for (let index = 0; index < bytes.length; index += 1) {
      bytes[index] ^= mask[index % mask.length]
    }

    cachedKey = new TextDecoder().decode(bytes).trim()
  } catch {
    cachedKey = ''
  }

  return cachedKey
}

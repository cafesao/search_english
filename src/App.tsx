import { useState } from 'react'

function searchAll(word: string) {
  window.open(
    `https://translate.google.com.br/?hl=pt-BR&sl=en&tl=pt&text=${word}&op=translate`,
    '_blank',
    'noreferrer'
  )
  window.open(
    `https://www.linguee.com.br/portugues-ingles/search?source=auto&query=${word}`,
    '_blank',
    'noreferrer'
  )
  window.open(
    `https://www.google.com/search?q=${word}&tbm=isch`,
    '_blank',
    'noreferrer'
  )
  window.open(
    `https://tatoeba.org/pt-br/sentences/search?from=eng&query=${word}&to=por`,
    '_blank',
    'noreferrer'
  )
  window.open(
    `https://thesaurus.plus/thesaurus/${word}`,
    '_blank',
    'noreferrer'
  )
  window.open(`https://forvo.com/word/${word}/#en`, '_blank', 'noreferrer')
}

function App() {
  const [word, setWord] = useState('')

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="flex-col space-y-8 max-w-md">
          <h1 className="text-5xl font-bold">Search English</h1>
          <form>
            <input
              type="text"
              placeholder="Word"
              className="input input-bordered w-full max-w-xs"
              onChange={(event) => setWord(event.target.value)}
            />
            <button
              className="btn btn-primary mt-5"
              onClick={() => {
                searchAll(word)
                setWord('')
              }}
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App

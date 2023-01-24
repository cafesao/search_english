import { useState } from 'react'
import { selectDefault } from './helper/valueDefault'

import searchAll from './helper/searchAll'

function App() {
  const [word, setWord] = useState('')
  const [select, setSelect] = useState(selectDefault)

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="flex-col space-y-2 max-w-md">
          <h1 className="text-5xl font-bold">Search English</h1>
          <form>
            <input
              type="text"
              placeholder="Word"
              className="input input-bordered w-full max-w-xs mt-7"
              onChange={(event) => setWord(event.target.value)}
            />
            <div className="form-control">
              <div className="mt-10">
                <label className="label cursor-pointer">
                  <span className="label-text">Google Translate</span>
                  <input
                    type="checkbox"
                    checked={select.googleTranslate}
                    className="checkbox"
                    onChange={() =>
                      setSelect({
                        ...select,
                        googleTranslate: !select.googleTranslate,
                      })
                    }
                  />
                </label>
                <label className="label cursor-pointer">
                  <span className="label-text">Linguee</span>
                  <input
                    type="checkbox"
                    checked={select.linguee}
                    className="checkbox"
                    onChange={() =>
                      setSelect({
                        ...select,
                        linguee: !select.linguee,
                      })
                    }
                  />
                </label>
                <label className="label cursor-pointer">
                  <span className="label-text">Google Image</span>
                  <input
                    type="checkbox"
                    checked={select.googleImage}
                    className="checkbox"
                    onChange={() =>
                      setSelect({
                        ...select,
                        googleImage: !select.googleImage,
                      })
                    }
                  />
                </label>
                <label className="label cursor-pointer">
                  <span className="label-text">Tatoeba</span>
                  <input
                    type="checkbox"
                    checked={select.tatoeba}
                    className="checkbox"
                    onChange={() =>
                      setSelect({
                        ...select,
                        tatoeba: !select.tatoeba,
                      })
                    }
                  />
                </label>
                <label className="label cursor-pointer">
                  <span className="label-text">Thesaurus</span>
                  <input
                    type="checkbox"
                    checked={select.thesaurus}
                    className="checkbox"
                    onChange={() =>
                      setSelect({
                        ...select,
                        thesaurus: !select.thesaurus,
                      })
                    }
                  />
                </label>
                <label className="label cursor-pointer">
                  <span className="label-text">Forvo</span>
                  <input
                    type="checkbox"
                    checked={select.forvo}
                    className="checkbox"
                    onChange={() =>
                      setSelect({
                        ...select,
                        forvo: !select.forvo,
                      })
                    }
                  />
                </label>
              </div>
            </div>

            <button
              className="btn btn-primary mt-5"
              onClick={() => {
                searchAll(word, select)
                setSelect(selectDefault)
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

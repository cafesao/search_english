import { v4 as uuid } from 'uuid'
import { useState } from 'react'

import { selectDefault } from './helper/valueDefault'
import searchAll from './helper/searchAll'

import Checkbox from './components/Checkbox'

function App() {
  const [word, setWord] = useState('')
  const [select, setSelect] = useState(selectDefault)

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="flex-col space-y-2 max-w-md">
          <h1 className="text-5xl font-bold">Search English</h1>
          <form className="form-control">
            <input
              type="text"
              placeholder="Word"
              autoFocus={true}
              className="input input-bordered w-full max-w-xs mt-7"
              onChange={(event) => setWord(event.target.value)}
            />
            <div className="mt-10">
              <div className="dropdown dropdown-hover">
                <label tabIndex={0} className="btn m-1">
                  Options
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <Checkbox
                      nameObj="googleTranslate"
                      nameShow="Google Translate"
                      select={select}
                      setSelect={setSelect}
                      key={uuid()}
                    />
                  </li>
                  <li>
                    <Checkbox
                      nameObj="linguee"
                      nameShow="Linguee"
                      select={select}
                      setSelect={setSelect}
                      key={uuid()}
                    />
                  </li>
                  <li>
                    <Checkbox
                      nameObj="googleImage"
                      nameShow="Google Images"
                      select={select}
                      setSelect={setSelect}
                      key={uuid()}
                    />
                  </li>
                  <li>
                    <Checkbox
                      nameObj="tatoeba"
                      nameShow="Tatoeba"
                      select={select}
                      setSelect={setSelect}
                      key={uuid()}
                    />
                  </li>
                  <li>
                    <Checkbox
                      nameObj="thesaurus"
                      nameShow="Thesaurus"
                      select={select}
                      setSelect={setSelect}
                      key={uuid()}
                    />
                  </li>
                  <li>
                    <Checkbox
                      nameObj="forvo"
                      nameShow="Forvo"
                      select={select}
                      setSelect={setSelect}
                      key={uuid()}
                    />
                  </li>
                </ul>
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

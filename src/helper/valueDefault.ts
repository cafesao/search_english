function objMapUrl(word: string) {
  return {
    googleTranslate: `https://translate.google.com.br/?hl=pt-BR&sl=en&tl=pt&text=${word}&op=translate`,
    linguee: `https://www.linguee.com.br/portugues-ingles/search?source=auto&query=${word}`,
    googleImage: `https://www.google.com/search?q=${word}&tbm=isch`,
    tatoeba: `https://tatoeba.org/pt-br/sentences/search?from=eng&query=${word}&to=por`,
    thesaurus: `https://thesaurus.plus/thesaurus/${word}`,
    forvo: `https://forvo.com/word/${word}/#en`,
  }
}

const selectDefault = {
  googleTranslate: true,
  linguee: true,
  googleImage: true,
  tatoeba: true,
  thesaurus: true,
  forvo: true,
}

export { objMapUrl, selectDefault }

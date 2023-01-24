import { objMapUrl } from './valueDefault'

export default function searchAll(word: string, select: any) {
  const objMap: any = objMapUrl(word)
  Object.keys(select)
    .filter((value) => select[value] === true)
    .map((value) => window.open(objMap[value], '_blank', 'noreferrer'))
}

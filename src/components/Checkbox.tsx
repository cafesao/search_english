import React from 'react'

function Checkbox(params: {
  nameObj: string
  nameShow: string
  select: ISelect
  setSelect: React.Dispatch<React.SetStateAction<ISelect>>
}) {
  return (
    <label className="label cursor-pointer">
      <span className="label-text">{params.nameShow}</span>
      <input
        type="checkbox"
        checked={params.select[params.nameObj]}
        className="checkbox"
        onChange={() =>
          params.setSelect({
            ...params.select,
            [params.nameObj]: !params.select[params.nameObj],
          })
        }
      />
    </label>
  )
}

export default Checkbox

import type { FC } from 'react'

export const App: FC = () => {
  return (
    <div className="grid size-full grid-cols-12 grid-rows-2 gap-px bg-gray-900">
      <div className="col-span-2 bg-white p-4">moo</div>
      <div className="col-span-8 bg-white p-4">moo</div>
      <div className="col-span-2 row-span-2 bg-white p-4">moo</div>
      <div className="col-span-2 bg-white p-4">moo</div>
      <div className="col-span-8 bg-white p-4">moo</div>
    </div>
  )
}

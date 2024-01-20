

const Card = ({name, exchange, handleChange}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <div className="text-gray-700 text-base">
        <div className="flex items-center border-b border-teal-500 py-2">
          <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="input usd here" aria-label="Full name" onChange={handleChange}/>
        </div>
        </div>
      </div>
      <div>{exchange}</div>
    </div>
  )
}

export default Card
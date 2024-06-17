

function TabButton({ name}) {
  return (

      <button className="bg-tab py-3 rounded-full   hover:bg-myBtn-800 flex gap-4 justify-between items-center text-white font-bold px-4 ">
        <p className="text-base font-normal"> {name}</p>
      
      </button>

  )
}

export default TabButton



  
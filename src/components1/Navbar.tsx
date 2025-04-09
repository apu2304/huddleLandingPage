
const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-12 py-8 font-(family-name:--primary-font)">
      <img src="assets/images/logo.svg" alt="" className="w-[35%] md:w-[10%] h-[35%] md:h-[10%]"/>
      <button className="bg-white rounded-full px-4 py-1 md:py-2 border-1 
      border-[var(--rose-pink)] text-[var(--rose-pink)] shadow-rose-pink/50">
      Try it free</button>
    </div>
  )
}

export default Navbar

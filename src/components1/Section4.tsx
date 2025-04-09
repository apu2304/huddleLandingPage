

const Section4 = () => {
  return (
    <div>
    <img src="assets/images/bg-section-top-desktop-2.svg" alt="" 
    className="w-screen hidden md:block"/>
    <img src="assets/images/bg-section-top-mobile-2.svg" alt="" 
    className="w-screen block md:hidden"/>
    <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-1 
    md:grid-rows-1 py-12 px-16 bg-[var(--alice-blue)] gap-16">
      <div className="flex flex-col justify-center row-start-2 md:row-start-1 md:row-end-2
      col-start-1 col-end-2 md:col-start-1 row-end-3 md:col-end-2
      items-center md:items-start text-[var(--gunmetal)] gap-2 text-center md:text-left">
          <h1 className="text-3xl font-bold text-left">Your Users</h1>
          <p className="max-w-md">It takes no time at all to integrate Huddle with your app's authentication solution. This means, 
          once signed in to your app, your users can start chatting immediately.</p>
      </div>
      <div>
          <img src="assets/images/illustration-your-users.svg" alt="" className="w-[100%] lg:w-[80%]"/>
      </div>
    </div>
    <img src="assets/images/bg-section-bottom-desktop-2.svg" alt="" 
    className="w-screen hidden md:block"/>
    <img src="assets/images/bg-section-bottom-mobile-2.svg" alt="" 
    className="w-screen block md:hidden"/>
  </div>
  )
}

export default Section4

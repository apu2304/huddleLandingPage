

const Section1 = () => {
    return (
        <div className="flex justify-center items-center flex-col">
            <div className="flex flex-col justify-center items-center px-4 py-2">
                <h1 className="text-3xl md:text-5xl font-bold text-center md:pt-40 pt-12
                text-[var(--gunmetal)]"
                >Build The Community Your Fans Will Love</h1>
                <p className="pt-4 text-[var(--gunmetal)] max-w-lg text-center"
                >Huddle re-imagines the way we build communities. You have a voice, but so does
                    your audience. Create connections with your users as you engage in genuine discussion.
                </p>
                <button className="bg-[var(--rose-pink)] hover:bg-[var(--persian-pink)]
                px-4 md:px-6 py-2 md:py-4 rounded-full border-1 mt-12
                hover:backdrop-opacity-75 hover:shadow-[var(--rose-pink)] text-[var(--white)]       
                ">Get Started For Free</button>
            </div >
            <div className="px-8 py-6 flex justify-center items-center">
                <img src="assets/images/screen-mockups.svg" alt="" className="w-[100%] md:w-[80%]"/>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-60 px-6 py-3">
               <div className="flex flex-col justify-center">
               <img src="assets/images/icon-communities.svg" alt=""
               className="w-[20%] md:w-[30%] h-[30%] md:h-[40%] mb-2" />
                 <h1 className="text-[var(--gunmetal)] text-5xl md:text-6xl font-bold mb-3">1.4k+</h1>
                 <p className="text-lg md:text-2xl">Communities Formed</p>
               </div>
               <div className="flex flex-col justify-center">
                <img src="assets/images/icon-messages.svg" alt="" 
                className="w-[20%] md:w-[30%] h-[30%] md:h-[40%] mb-2"/>
                 <h1 className="text-[var(--gunmetal)] text-5xl md:text-6xl font-bold mb-3">2.7m+</h1>
                 <p className="text-lg md:text-2xl">Messages Sent</p>
               </div>
            </div>
        </div>
    )
}

export default Section1

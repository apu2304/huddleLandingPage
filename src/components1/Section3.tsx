
const Section3 = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-1 
      md:grid-rows-1 py-12 px-16 gap-16">
        <div>
            <img src="assets/images/illustration-flowing-conversation.svg" alt="" 
            className="w-[100%] lg:w-[80%]"/>
        </div>
        <div className="flex flex-col justify-center items-center md:items-start gap-2 text-center md:text-left">
            <h1 className="text-3xl font-bold text-left"> Flowing Conversations</h1>
            <p className="max-w-md"> You wouldn't paginate a conversation in real life, so why do it online? Our threads have 
            just-in-time loading for a more natural flow.</p>
        </div>
      </div>
    </div>
  )
}

export default Section3

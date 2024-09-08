import ReviewCard from "../ui/review-card"

function Reviews() {
  return (
    <section className="flex flex-col justify-center items-center px-5 py-16 gap-12 md:px-16 md:py-28">
      <article className='flex flex-col justify-center items-center'>
            <p className='text-[32px] md:text-[48px] font-bold'>Client Feedback</p>
            <p className='text-[16px]'>Hear What Our Clients Have to Say</p>
        </article>
      <article className="grid md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 gap-8 ">
        <ReviewCard />
    </article>
    </section>
  )
}

export default Reviews
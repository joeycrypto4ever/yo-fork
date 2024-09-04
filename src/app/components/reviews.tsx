import ReviewCard from "../ui/review-card"

function Reviews() {
  return (
    <section>
      <article className='flex flex-col justify-center items-center'>
            <p className='text-[48px] font-bold'>Client Feedback</p>
            <p className='text-[18px]'>Hear What Our Clients Have to Say</p>
        </article>
      <article className="grid grid-cols-3 grid-rows-2 gap-8 px-16 py-28">
        <ReviewCard />
    </article>
    </section>
  )
}

export default Reviews
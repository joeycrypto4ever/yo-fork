import ReviewCard from "../ui/review-card"

function Reviews() {
  return (
    <section id="Testemonial" className="flex flex-col justify-center items-center  py-16 gap-12  md:py-28 px-[20px] md:px-[64px] bg-gradient-to-b from-white to-second">
      <article data-aos="fade-up" className='flex flex-col justify-center items-center'>
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
import Image from "next/image"
import { reviewsData } from "../lib/reviews-data"

function ReviewCard() {
  return (
    reviewsData.map((review) => {
      return (
        <div data-aos="flip-up" key={review.id} className=''>
          <div className='flex flex-col justify-center items-start gap-8 p-8 border-[1px] '>
            <div className='flex justify-center items-center gap-2'>
              {[...Array(review.stars)].map((star, index) => (
                <Image key={index} src="/star.png" alt="logo" width={20} height={18.5} />
              ))}
            </div>

            <p className='text-[18px] '>{review.text}</p>
            <div className="flex justify-center items-center gap-4">  
                <Image src={review.image} alt="logo" width={56} height={56} />
                <div className="flex flex-col justify-center items-start">
                    <p className='text-[16px] font-bold'>{review.name}</p>
                    <p className='text-[16px]'>{review.position}</p>
                </div>
            </div>
          </div>
        </div>
      )
    })
  )
}

export default ReviewCard
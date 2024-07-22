import Image from 'next/image'
import '@/styles/contact.module.css'

export const contactUs = () => {
  return (
    <>
      <div className="container flex flex-col md:flex-row justify-between gap-3 pt-14 my-8">
        <div className='w-2/5'>
          <h1 className='font-bold text-3xl'>
            Let us Talk
          </h1>
          <p className='text-gray-400'>
            Go ahead and send us a brief of your project !
          </p>
              
              <div className="form-group flex flex-col mt-8">
                <label htmlFor="" className='required'>
                  Full Name
                </label>
                <input type="text" className="peer block min-h-[auto] w-full rounded border bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary" placeholder="John Due" id="name"/>

              </div>

              <div className="form-group flex flex-col mt-4">
                <label htmlFor="" className='required'>
                  Email
                </label>
                <input type="text" className="peer block min-h-[auto] w-full rounded border bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary " placeholder="John Due" id="name"/>

              </div>


              <div className="form-group flex flex-col mt-4">
                <label htmlFor="" className='required'>
                 Phone Number
                </label>
                <input type="text" className="peer block min-h-[auto] w-full rounded border bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary " placeholder="John Due" id="name"/>

              </div>


              <div className="form-group flex flex-col mt-4">
                <label htmlFor="" className='required'>
                 Message
                </label>
                <textarea rows={8} className="peer block min-h-[auto] w-full rounded border bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary " placeholder="John Due" id="name"/>

              </div>

         
        </div>
        <div className='w-3/5'>
            <Image className="" src="/Screenshot from 2024-07-22 02-57-57.png" alt="Your Company" width={500} height={300} />
          </div>
        </div>
      </>
      )
}

export default contactUs

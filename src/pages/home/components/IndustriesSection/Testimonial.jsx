import React from 'react'
import quote from '../../assets/quote.png'
const Testimonial = () => {
    const Skywalks = {
        fontFamily: 'Skywalks',
        color: "#262626",
        fontWeight: 'normal'
      };
      const Lato = {
        fontFamily: 'Lato',
        color: "#262626",
      };
  return (
    <section class="relative py-8 lg:py-14 2xl:py-30">
  <div class="container px-4 mx-auto">
    <div class="max-w-5xl mx-auto">
    <div class="w-full px-4 mb-6">
          <h1 style={Skywalks} class="text-5xl text-center text-[#262626]">Testimonials</h1>
        </div>
      <div class="flex flex-wrap items-center -mx-4 mb-8 lg:flex-row flex-col-reverse bg-blue-200 rounded-2xl p-8">
       
        <div class="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
            <div class="flex flex-wrap">
              {/* <div class="hidden w-1/5">
                <img src={quote} className='w-14' alt=""/>
              </div> */}
              <div style={Lato} class="w-full">
                <h3 style={Skywalks} class="mb-8 text-4xl lg:text-5xl font-bold font-heading">Exceptonial support from the team</h3>
                <p class="mb-8 text-lg">The point of using Lorem Ipsum is that it has a more-or-less normal. Vestibulum lectus ex, molestie id erat at, consectetur.</p>
                <p class="mb-8 text-lg">Etiam finibus nibh enim, et tempus sem imperdiet eget. Ut blandit, nulla quis tincidunt dignissim, ipsum diam efficitur est, et iaculis.</p>
              </div>
              <div class="w-full  ">
            <h4 class="mb-1 text-3xl font-bold">Léa Herrera</h4>
            <p>Google</p>
          </div>
          </div>
         
        </div>
        <div class="w-full lg:w-1/2 px-4">
          <img class="h-64 md:h-96 lg:h-144 mb-10 lg:mb-0 mx-auto rounded-full object-cover object-top" src="https://images.pexels.com/photos/5325840/pexels-photo-5325840.jpeg?q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=940&w=640" alt=""/>
        </div>
      </div>
      <div class="text-center">
        <button class="inline-flex mr-2 items-center justify-center w-10 h-10 bg-[#3b44f6] rounded-full">
          <svg width="7" height="14" viewbox="0 0 7 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.84708 12.115C7.05097 12.3207 7.05097 12.6512 6.84708 12.8554C6.64319 13.0596 6.31377 13.0603 6.10987 12.8554L0.152917 6.87493C-0.0509739 6.67074 -0.0509738 6.34026 0.152917 6.13456L6.10988 0.154119C6.31377 -0.0500693 6.64319 -0.0500693 6.84708 0.154119C7.05097 0.359063 7.05097 0.690301 6.84708 0.894489L1.4143 6.50512L6.84708 12.115Z" fill="white"></path>
          </svg>
        </button>
        <button class="inline-flex items-center justify-center w-10 h-10 bg-[#3b44f6] rounded-full">
          <svg width="7" height="13" viewbox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.15292 0.901511C-0.0509709 0.696057 -0.0509709 0.365972 0.15292 0.16203C0.356811 -0.0419136 0.686232 -0.0426689 0.890123 0.16203L6.84708 6.13528C7.05097 6.33923 7.05097 6.66931 6.84708 6.87476L0.890121 12.848C0.686231 13.052 0.35681 13.052 0.152919 12.848C-0.050972 12.6433 -0.0509719 12.3125 0.152919 12.1085L5.5857 6.50465L0.15292 0.901511Z" fill="white"></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
</section>
  
)
}

export default Testimonial;
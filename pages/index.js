import Image from 'next/image'

const Homepage = () => {

  return (
    <main>
      <section className="Hero flex items-center  " style={{ background: "url(/hero-bg.jpg) no-repeat right bottom", backgroundSize: "cover" }}>
        <div className="containerWidth">
          <div className="decor"></div>
          <h1 className=" py-10 pl-5 bg-white">A LABORATORY FOR DESIGN AND DIGITAL EXPERIENCES.</h1>
        </div>
      </section>

      <section className="Banner1 mb-10 relative">
        <div className="grid grid-cols-4 gap-x-5 gap-y-5 containerWidth -mt-20">

          {/* row1 */}
          <div className="col-span-2 bg_violet text-white py-16 px-5">
            <h2> ABOUT US.</h2>
            <p className="py-4 pb-12 w-4/5"> From empowering challenger brands to think big to helping global brands feel closer to home,
              we leverage technology to bring people closer to the products, content, and experiences they love.</p>
            <a> READ MORE</a>
          </div>
          <div className="plan col-span-2 flex flex-col items-start justify-end pl-10 pb-10">
            <i className="fab fa-500px text-my_blue"></i>
            <h4 className="py-5"> PLAN </h4>
            <p className="p-0 w-4/5"> After your free initial consultation we will
              confirm with you a ROI Plan that is focused to your specific business objectives.</p>
          </div>


          {/* row2 */}
          <div className="col-span-2 md:col-span-4 sm:col-span-4 xs:col-span-4">
            <Image src="/banner1_img2.jpg " width={1000} height={700} alt="mountain" />
          </div>
          <div className="implement bg_blue p-10 md:col-span-2 sm:col-span-2 xs:col-span-4">
            <i className="fab fa-500px"></i>
            <h4 className="py-5"> IMPLEMENT </h4>
            <p className="p-0"> With a ratio of just 8 customers to 1 employee across
              the business we will execute your digital Marketing plan with an unrivalled service.</p>
          </div>
          <div className=" md:col-span-2 sm:col-span-2 xs:col-span-4">
            <Image src="/banner1_img1.jpg" width={400} height={585} alt="building" />
          </div>
        </div>
      </section>

      <section className="Banner2 relative mb-10 " style={{ background: "url(/banner2_bg.jpg) no-repeat center", backgroundSize: "cover" }} >
        <div className="containerWidth flex items-center justify-between  xs:flex-col xs:items-end xs:justify-center" style={{ height: "50vh" }}>
          <h4 className="pt-36 xs:pt-0"> MONITOR</h4>
          <p className="w-1/5 ml-auto pt-36 xs:pt-10 xs:text-right"> Regular meetings and reviews allow us the opportunity to use our KPI’s to consistently monitor and influence your progress & success.</p>
        </div>
      </section>

      <section className="Banner4 relative mb-10 " >
        <div className="containerWidth grid grid-cols-5 gap-x-2 gap-y-2">
          {/* row1 */}
          <div className="optimize flex flex-col items-start justify-end pb-10 xs:col-span-5">
            <i className="fab fa-500px text-my_blue"></i>
            <h4 className="py-5"> OPTIMIZE</h4>
            <p className="p-0 w-3/4"> Constant technical R&D, refinement of approach and
              creative content campaigns ensure your results are always improving.</p>
          </div>

          <div className="col-span-2 xs:col-span-5">
            <Image src="/banner3_img1.jpg" width={350} height={400} alt="jeans..." />
          </div>
          <div className="col-span-2 xs:col-span-5">
            <Image src="/banner3_img2.jpg" width={350} height={400} alt="love..." />
          </div>

          {/* row2*/}
          <div className="decor h-full w-4/5"> </div>
          <div className="col-span-2 md:col-span-3 sm:col-span-4 xs:col-span-4">
            <h2 className="w-4/5"> RELEVANCE IS AN AWARDED, FAST GROWING DIGITAL
              AGENCY THAT PROVIDES CUTTING EDGE ONLINE MARKETING SERVICES.</h2>
          </div>
          <div className="md:col-span-2 sm:col-span-3 xs:col-span-3">
            <Image src="/banner3_img4.jpg" width={400} height={380} alt="love..." />
          </div>
          <div className="md:col-span-2 sm:col-span-2 xs:col-span-2">
            <Image src="/banner3_img5.jpg" width={400} height={380} alt="love..." />
          </div>

        </div>
      </section>

      <section className="Performance bg_black py-10">
        <div className="containerWidth flex justify-around items-center space-x-10">
          <div >
            <h2 className='text-white'> PERFORMANCE MARKETING</h2>
            <div className="decor"> </div>
          </div>
          <div className="Image flex sm:flex-col xs:flex-col " >
            <div className="pt-20 pr-5 sm:hidden xs:hidden">
              <Image src="/banner4_img1.jpg" width={600} height={850} alt="girls" />
            </div>
            <div className="sm:hidden xs:hidden">
              <Image src="/banner4_img2.jpg" width={600} height={850} alt="hands" />
            </div>
          </div>
          <div className="text">
            <p className=" py-10 text-white"> We are setting up performance marketing accounts with the most effective and targeted techniques using
              all the latest features and tools. Our focus is always reach and ROI.</p>
            <a> READ MORE</a>
          </div>
        </div>
        <div className=" xs:flex sm:flex md:hidden xl:hidden lg:hidden sm:items-center sm:justify-center sm:space-x-10 sm:p-10 xs:p-10 xs:space-x-10">
          <div className="">
            <Image src="/banner4_img1.jpg" width={600} height={850} alt="girls" />
          </div>
          <div className="">
            <Image src="/banner4_img2.jpg" width={600} height={850} alt="hands" />
          </div>
        </div>
      </section>

      <section className="Banner5 bg_violet mb-10 pb-20">
        <div className="containerWidth grid grid-cols-4 gap-x-5 gap-y-5" >
          {/* row 1 */}
          <div className="col-span-1 -mt-6 -ml-10">
            <Image src="/banner5_img1.jpeg" width={500} height={500} alt="class" />
          </div>
          <div className="text col-span-3 flex flex-col items-center justify-center">
            <h2 className="text-white w-3/5"> WE BUILD PRODUCTS AND EXPERIENCES ON THE 4 SIDES OF THE DIGITAL UNIVERSE.</h2>
            <p className="text-white w-3/5"> Our secret informer improves human & droid relationship by analysing your user’s behavior.A custom strategy coupling a
              plethora of tools is designed to achieve our clients’ goals.</p>
          </div>
          {/* row 2 */}
          <div className=" flex items-center col-span-2 sm:col-span-2 xs:col-span-2">
            <Image src="/banner5_img2.jpg" width={500} height={350} alt="color" />
          </div>

          <div className="flex items-center sm:col-span-2 xs:col-span-2" >
            <Image src="/banner5_img3.jpg" width={300} height={430} alt="pineapple" />
          </div>
          <div className="text bg_blue px-3 py-5 flex flex-col items-start justify-center sm:col-span-4 xs:col-span-4 ">
            <h4> DESIGN</h4>
            <p className="py-2"> Obsessed with creative design.We navigate through different galaxies: web design,
              graphic identity, interactive design, keynotes, prints and GIF & illustrations.</p>
            <a> READ MORE</a>
          </div>

        </div>
      </section>

      <section className="Banner6 mb-10 ">
        <div className="containerWidth flex flex-row items-center justify-center space-x-32 md:space-x-10 sm:space-x-10 xs:space-x-10">
          <div className="Banner6_left md:w-full">
            <div className="text bg_violet text-white py-10 px-5">
              <h2> CONTACT US</h2>
              <p className="py-5">Want to come on board with us in your brand new mission? Drop us a line !</p>
              <p className="py-1">18 Vieille Rue du Moulin</p>
              <p className="py-1">1180 Uccle</p>
              <p className="py-1">info@digital.com</p>
              <p className="py-1">+32 478 66 77 56</p>
            </div>
            <div className="pt-10 md:hidden sm:hidden xs:hidden">
              <iframe className="embed-responsive-item w-full h-80" src="//maps.google.com/maps?output=embed&amp;q=18%20Vieille%20Rue%20du%20Moulin&amp;z=10&amp;t=m"
                data-map="JTdCJTIyYWRkcmVzcyUyMiUzQSUyMjE4JTIwVmllaWxsZSUyMFJ1ZSUyMGR1JTIwTW91bGluJTIyJTJDJTIyem9vbSUyMiUzQTEwJTJDJTIydHlwZUlkJTIyJTNBJTIycm9hZCUyMiUyQyUyMmxhbmclMjIlM0ElMjIlMjIlN0Q=">
              </iframe>
            </div>
          </div>
          <div className="Banner6_right md:w-full sm:w-full xs:w-full">
            <div className="-mt-28 md:hidden sm:hidden xs:hidden">
              <Image src="/banner6_bg.jpg" width={300} height={400} alt="banner6" />
            </div>
            <form className="flex flex-col gap-y-5  pt-10 pb-5 ">
              <input className="input_border py-2 pl-2" type="text" placeholder="Enter your Name" />
              <input className="input_border py-2 pl-2" type="email" placeholder="Enter a valid email address" />
              <textarea className="input_border py-2 pl-2" type="text" placeholder="Enter your messge" />
            </form>
            <a className="bg_blue"> SUBMIT</a>
          </div>
        </div>
        <div className="containerWidth pt-10 md:block xs:block lg:hidden xl:hidden">
          <iframe className="embed-responsive-item w-full h-80" src="//maps.google.com/maps?output=embed&amp;q=18%20Vieille%20Rue%20du%20Moulin&amp;z=10&amp;t=m"
            data-map="JTdCJTIyYWRkcmVzcyUyMiUzQSUyMjE4JTIwVmllaWxsZSUyMFJ1ZSUyMGR1JTIwTW91bGluJTIyJTJDJTIyem9vbSUyMiUzQTEwJTJDJTIydHlwZUlkJTIyJTNBJTIycm9hZCUyMiUyQyUyMmxhbmclMjIlM0ElMjIlMjIlN0Q=">
          </iframe>
        </div>
      </section>
    </main >
  )
}

export default Homepage
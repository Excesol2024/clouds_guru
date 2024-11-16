
export default function BlogsLandingpage() {
  return (
    <div className="h-screen flex justify-center items-center">
    <div className="flex">
        <div className="abouttheblogs">
        <img src="/aboutblog.png" alt="" />
        <h1 className="text-[#FF863C] md:mt-14 md:text-5xl text-3xl font-bold mt-2 max-w-3xl">
              Transforming Lives Through Education and Training
            </h1>
            <div className="date py-6 font-semibold text-gray-400">
                January 21, 2021
              </div>
              <p className="md:mt-10 mt-5 max-w-3xl w-full text-lg">
              We're committed to transforming the way people learn about cloud
              computing and cloud security by making these complex topics
              accessible to everyone, whether you're just starting out or
              looking to advance your skills. Our team of dedicated
              professionals, passionate about technology and education, is hard
              at work developing comprehensive training programs to provide you
              with the best possible learning experience.{" "}
            </p>
        </div>
        <div className="latestblogs"></div>
    </div>

    </div>
  )
}

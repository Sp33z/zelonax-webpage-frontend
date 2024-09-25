function Home()
{
    return <div className="absolute flex-col h-full w-full overflow-hidden">
        <div className="flex flex-col h-full w-full overflow-y-auto p-2 xl:py-10">
            <p className="text-white my-auto xl:text-xl xl:px-96">
                Welcome to <span className="font-bold">Zelonax</span>! We’re dedicated to providing reliable, efficient, and timely transportation services tailored to meet your needs. Whether you’re looking to move goods locally or internationally, our experienced team is here to ensure your shipments arrive safely and on schedule. Explore our services and let us take your logistics to the next level!
            </p>
            <div className="flex flex-col w-fit h-fit my-10">
                <img
                    className="top-0 left-0 opacity-50 rounded-xl"
                    src = "/images/home_background.jpg"
                />
            </div>
            <p className="text-white my-auto xl:text-xl xl:px-96">
            At <span className="font-bold">Zelonax</span>, we don’t just move cargo—we deliver peace of mind. With a state-of-the-art fleet, real-time tracking, and years of industry expertise, we guarantee seamless transportation solutions for businesses of all sizes. From refrigerated goods to hazardous materials, trust us to handle your shipments with precision and care. Join the many satisfied clients who rely on us to keep their supply chains running smoothly!
            </p>
        </div>
    </div>
}

export default Home;
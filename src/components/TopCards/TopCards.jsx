import bgOverly from '../../assets/vector1.png'

const TopCards = ({ inProgressCount, resolvedCount }) => {

    return (
        <div className='w-11/12 mx-auto py-16 flex gap-4'>

            {/* In Progress */}
            <div className='relative bg-gradient-to-tl from-[#9F62F2] to-[#632EE3] py-24 px-44 rounded-2xl text-center text-white w-[50%]'>

                <img src={bgOverly} className="absolute inset-0 w-full h-full object-contain object-left" />
                <img src={bgOverly} className="absolute right-0 top-0 h-full object-contain scale-x-[-1]" />

                <p className='text-2xl'>In-Progress</p>
                <h1 className='text-6xl font-bold mt-4'>
                    {inProgressCount}
                </h1>

            </div>

            {/* Resolved */}
            <div className='relative bg-gradient-to-tl from-[#00827A] to-[#54CF68] py-24 px-44 rounded-2xl text-center text-white w-[50%]'>

                <img src={bgOverly} className="absolute inset-0 w-full h-full object-contain object-left" />
                <img src={bgOverly} className="absolute right-0 top-0 h-full object-contain scale-x-[-1]" />

                <p className='text-2xl'>Resolved</p>
                <h1 className='text-6xl font-bold mt-4'>
                    {resolvedCount}
                </h1>

            </div>

        </div>
    );
};

export default TopCards;
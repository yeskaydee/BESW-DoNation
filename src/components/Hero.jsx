import { setGlobalState, useGlobalState } from '../store'
const Hero = () => {
  const [stats] = useGlobalState('stats')

  return (
    <div className="text-center bg-white text-gray-800 py-24 px-6">
      <div className="flex justify-center items-center mt-10 bg-gray-100">
        <div
          className="flex flex-col justify-center items-center
          h-20 border shadow-md w-full"
        >
          <span
            className="text-lg font-bold text-purple-900
            leading-5"
          >
            {stats?.totalMissions || 0}
          </span>
          <span>Missions</span>
        </div>
        <div
          className="flex flex-col justify-center items-center
          h-20 border shadow-md w-full"
        >
          <span
            className="text-lg font-bold text-purple-900
            leading-5"
          >
            {stats?.totalSupporting || 0}
          </span>
          <span>Donations</span>
        </div>
        <div
          className="flex flex-col justify-center items-center
          h-20 border shadow-md w-full"
        >
          <span
            className="text-lg font-bold text-purple-900
            leading-5"
          >
            {stats?.totalDonations || 0} ETH
          </span>
          <span>Donated</span>
        </div>
      </div>
    </div>
  )
}

export default Hero

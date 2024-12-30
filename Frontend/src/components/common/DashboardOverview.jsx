


const DashboardOverview = ({icon,text,number,color,flexSize}) => {
    return (
      <div className={`${flexSize}`}>
      <div className="flex items-stretch bg-white">
          <div className={`w-20 text-2xl flex items-center justify-center ${color} text-white`}>
              {icon}
          </div>
          <div className="flex flex-col pl-5 pr-20 py-4 gap-1">
              <h1 className="font-medium">{text}</h1>
              <p className="font-bold">{number}</p>
          </div>
    </div>
      </div>
  )
}

export default DashboardOverview
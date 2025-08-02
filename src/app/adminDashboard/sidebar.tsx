

export default function Sidebar(){
  return(
    <div className="fixed h-screen w-2xs bg-pink-200 flex flex-col box-border p-4 -translate-x-full lg:translate-x-0">
      <span className="flex items-center mb-4 p-4">
        <img src="/kenjie.jpg" className="aspect-square" width={40} alt="" />
        <h1 className="text-lg ml-4">Dashboard</h1>
      </span>
      <div className="w-full hover:bg-gray-400/80 pl-4 h-10 flex items-center rounded-md mb-3">Home</div>
      <div className="w-full hover:bg-gray-400/80 pl-4 h-10 flex items-center rounded-md mb-3">Home</div>
      <div className="w-full hover:bg-gray-400/80 pl-4 h-10 flex items-center rounded-md mb-3">Home</div>
      <div className="w-full hover:bg-gray-400/80 pl-4 h-10 flex items-center rounded-md mb-3">Home</div>
    </div>
  )
}
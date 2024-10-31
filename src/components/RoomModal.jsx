import React from 'react'

const RoomModal = ({rooms, decrementRooms, incrementRooms, adults, setAdults, total, children, setChildren, setIsRoomModalOpen}) => {
  return (
    <div className="absolute top-full right-72 h-[350px] w-72 border-none shadow-lg border-gray-300 bg-white rounded-lg z-10">
            <h1 className="w-10/12 mt-2 rounded-lg mx-auto px-2 py-3 font-atypKido text-sm bg-myKhaki text-myBlue">Maximum <span className="font-semibold ">4 Guests </span> per Room</h1>
            <div className=" w-10/12 mx-auto justify-between p-2">
                <h1 className="text-xl text-myBlue font-atypKido font-semibold">Rooms</h1>
                <div className="flex justify-center items-center border-none shadow-xl rounded-lg">
                    <button className="pr-16 py-4 text-2xl" onClick={()=>rooms > 1 ?decrementRooms() : undefined}>-</button>
                    <h1 className="text-2xl mt-1 text-myOrange font-semibold font-atypKido">{rooms}</h1>
                    <button className="pl-16 py-4 ml-2 text-2xl"onClick={()=> rooms < 10 ?incrementRooms(): undefined}>+</button>
                </div>
            </div>
            <div className="flex mt-4 gap-3 justify-between w-9/12 mx-auto">
                <div>
                <h1 className="text-lg font-semibold text-myBlue font-atypKido">Adults</h1>
                <div className="flex items-center  border-none shadow-lg rounded-lg px-1 py-2">
                    <button className="px-4 py-2 rounded-l-md text-xl font-semibold" onClick={()=> adults > rooms ? setAdults((prev)=>prev-1) : undefined}>-</button>
                    <h1 className="text-lg mt-2 text-myOrange font-semibold font-atypKido">{adults}</h1>
                    <button className="px-4 py-2 rounded-r-md text-xl font-semibold"onClick={ () => total < rooms * 4 ? setAdults((prev)=> prev+1) : undefined}>+</button>
                </div>
                </div>
                <div>
                <div>
                <h1 className="text-lg font-semibold text-myBlue font-atypKido">Children</h1>
                <div className="flex items-center border-none shadow-lg rounded-lg px-1 py-2">
                    <button className="px-4 py-2 rounded-l-md tetx-xl font-semibold" onClick={()=>children > 0 ? setChildren((prev) => prev - 1) : undefined}>-</button>
                    <h1 className="text-lg mt-2 text-myOrange font-semibold font-atypKido">{children}</h1>
                    <button className="px-4 py-2 rounded-r-md text-xl font-semibold"onClick={() => total < rooms * 4 ? setChildren((prev)=> prev + 1) : undefined}>+</button>
                </div>
                </div>
                </div>
                </div>
                <button className="border-none shadow-lg px-6 py-3 mt-4 text-white rounded-lg bg-myOrange text-lg ml-10" onClick={()=>setIsRoomModalOpen(false)}>Apply</button>
          </div>
  )
}

export default RoomModal
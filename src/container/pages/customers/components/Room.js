import React, { useState } from 'react'
import RoomSVG from '../../../../assets/svg/RoomSVG'

const Room = ({
    Cost = '',
    RoomNo = '',
    Floor = '',
    IsOccupied = '',
    RoomType = '',
    onClick = () => { }
}) => {

    const [RoomTypes, setRoomTypes] = useState({
        0: 'Standard',
        1: 'Premium',
        2: 'Luxurious'
    })

    const labelClass = "text-xs font-light font-serif "
    const valueClass = "text-sm font-serif"
    return (
        <div id={RoomNo + 'Room'} onClick={onClick} className={"w-36 p-2 my-2 mx-2 hover:border-2 z-10 shadow rounded bg-" + (IsOccupied ? "red" : "green") + "-100 " + (IsOccupied ? "pointer-events-none" : "cursor-pointer")}>
            <div className="text-center" id={RoomNo + 'RoomSVGContainer'}>
                <RoomSVG IsOccupied={IsOccupied} id={RoomNo + 'RoomSVG'} />
            </div>
            <div className="flex flex-col" id={RoomNo + 'RoomDetailsContainer'}>
                <p id={RoomNo + 'RoomNo'}>
                    <span className={labelClass} id={RoomNo+'RoomNoLabel'}> Room No:  </span>
                    <span className={valueClass} id={RoomNo+'RoomNoValue'}> {Floor}-{RoomNo} </span>
                </p>
                <p id={RoomNo + 'RoomType'}>
                    <span className={labelClass} id={RoomNo+'RoomCategoryLabel'}>Category:  </span>
                    <span className={valueClass} id={RoomNo+'RoomCategoryValue'}> {RoomTypes[RoomType]} </span>
                </p>
                <p id={RoomNo + 'RoomCost'}>
                    <span className={labelClass} id={RoomNo+'RoomCostLabel'}>Cost: ₹</span>
                    <span className={valueClass} id={RoomNo+'RoomCostValue'}> {Cost} </span>
                </p>
            </div>
            {/* <p id={RoomNo+'RoomIsOccupied'}>Occupied: {IsOccupied}</p> */}
        </div>
    )
}

export default Room

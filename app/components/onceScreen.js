export default function OnceScreen () {
    return(
        <div className="oneScreen" tabIndex="1" id='home'>
            <div className="gridSystemOneScreen">
            <div className='grid-cols-subgrid col-span-7'></div>
            <div className='grid-rows-subgrid col-span-1 row-span-3'></div>

            <div className='containerMainContent'>
                <div className='titleHeading'>
                <div className='text-highBlue'>مـــــــــــــــــوج</div>
                <div className='text-lowBlue'>آرمــــــــــــــــان‌</div>
                </div>
                <div className='containerTwoIcon'>
                <img className='' src='./mowj-Icon.png'/>
                <img className='' src='./mowj-Icon.png'/>
                </div>
                <div className='spaceImageMain'>
                <img className='Image' src='./mowj-BG.png'/>
                </div>            
            </div>

            <div className='grid-rows-subgrid col-span-1 row-span-3'></div>
            </div>

            <div className="arrowDown">
            <a href='#about'><img src='./ChevronsDown.svg' /></a>
            </div>
        </div>
    )
}
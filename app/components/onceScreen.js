export default function OnceScreen () {
    return(
        <div className="oneScreen" tabIndex="1" id='home'>
            <div className="gridSystemOneScreen max-[750px]:hidden">
                <div className='grid-cols-subgrid col-span-7'></div>
                <div className='max-[1330px]:hidden grid-rows-subgrid col-span-1 row-span-3'></div>
                <div className='containerMainContent'>
                    <div className='titleHeading max-[1329px]:hidden'>
                        <div className='text-highBlue'>مـــــــــــــــــوج</div>
                        <div className='text-lowBlue'>آرمــــــــــــــــان‌</div>
                    </div>
                    <div className='titleHeading max-[899px]:hidden min-[1330px]:hidden'>
                        <div className='text-highBlue'>مـــــــــــــوج</div>
                        <div className='text-lowBlue'>آرمــــــــــــان‌</div>
                    </div>
                    <div className='titleHeading min-[900px]:hidden'>
                        <div className='text-highBlue'>مــــــــــوج</div>
                        <div className='text-lowBlue'>آرمـــــــــان‌</div>
                    </div>
                    <div className='containerTwoIcon'>
                        <img className="max-[1330px]:w-[150px]" src='./mowj-Icon.png'/>
                        <img className="max-[1330px]:w-[150px]" src='./mowj-Icon.png'/>
                    </div>
                    <div className='spaceImageMain'>
                        <img className='Image' src='./mowj-BG.png'/>
                    </div>            
                </div>
                <div className='max-[1330px]:hidden grid-rows-subgrid col-span-1 row-span-3'></div>
            </div>
            <div className="arrowDown max-[750px]:hidden">
                <a href='#about'><img src='./ChevronsDown.svg' /></a>
            </div>
            <div className="containerMobileOnceScreen min-[750px]:hidden">
                <div className="titleMobile">
                    <img className="topIconMowjMobile" src="./mowj-Icon.png" />
                    <div className="text-highBlue">مـــــوج</div>
                    <div className="text-lowBlue">آرمـــان‌</div>
                </div>
                <div className='spaceImageMainMobile'>
                    <img className='ImageMobile' src='./mowj-BG.png'/>
                </div>     
            </div>
        </div>
    )
}
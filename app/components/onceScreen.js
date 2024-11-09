export default function OnceScreen () {
    return(
        <div className="oneScreen" tabIndex="1" id='home'>
            <div className="gridSystemOneScreen max-[750px]:hidden">
                <div className='grid-cols-subgrid col-span-7'></div>
                <div className='max-[1330px]:hidden grid-rows-subgrid col-span-1 row-span-3'></div>
                <div className='containerMainContent'>
                    <div className='titleHeading max-[1329px]:hidden'>
                        <div className='text-highBrown'>مـــــــــــــــــوج</div>
                        <div className='text-lowBrown'>آرمــــــــــــــــان‌</div>
                    </div>
                    {/* <div className='titleHeading max-[899px]:hidden min-[1330px]:hidden'>
                        <div className='text-highBrown'>مـــــــــــــوج</div>
                        <div className='text-lowBrown'>آرمــــــــــــان‌</div>
                    </div>
                    <div className='titleHeading min-[900px]:hidden'>
                        <div className='text-highBrown'>مــــــــــوج</div>
                        <div className='text-lowBrown'>آرمـــــــــان‌</div>
                    </div>*/}
                    <div className='containerTwoIcon'>
                        <img className="max-[1330px]:w-[150px]" src='./havij.png'/>
                        <img className="max-[1330px]:w-[150px]" src='./havij.png'/>
                    </div> 
                    <div className='spaceImageMain'>
                        <img className='Image' src='./richhavich-bg.png'/>
                    </div>            
                </div>
                <div className='max-[1330px]:hidden grid-rows-subgrid col-span-1 row-span-3'></div>
            </div>
            <div className="arrowDown max-[750px]:hidden">
                <a href='#about'><img src='./chevrons-down.svg' /></a>
            </div>
            <div className="containerMobileOnceScreen min-[750px]:hidden">
                <div className="titleMobile">
                    <img className="topIconMowjMobile" src="./havij.png" />
                    <div className="text-highBrown">مـــــوج</div>
                    <div className="text-lowBrown">آرمـــان‌</div>
                </div>
                <div className='spaceImageMainMobile'>
                    <img className='ImageMobile' src='./richhavich-bg.png'/>
                </div>     
            </div>
        </div>
    )
}
export default function OnceScreen () {
    return(
        <div className="oneScreen" tabIndex="1" id='home'>
            <div className="gridSystemOneScreen max-[750px]:hidden">
                <div className='grid-cols-subgrid col-span-7'></div>
                <div className='max-[1330px]:hidden grid-rows-subgrid col-span-1 row-span-3'></div>
                <div className='containerMainContent'>
                    <div className='titleHeading'>
                        <div className="flex flex-col">
                            <div className="subTitle text-highBrown mr-auto max-[820px]:mr-0 -mb-6">ریچ</div>
                            <div className="text-lowBrown">امیرحسین</div>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex-1 opacity-0 select-none">.</div>
                            <div className="text-highBrown mr-16">آرمان‌نیا</div>
                            <div className="subTitle text-lowBrown -mt-5  mr-auto">هویج</div>
                        </div>
                    </div>
                    <div className='containerTwoIcon'>
                        <img className="w-[150px] max-[1330px]:w-[150px]" src='./havij.png'/>
                        <img className="w-[150px] max-[1330px]:w-[150px]" src='./havij.png'/>
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
                    <img className="topIconRichMobile" src="./havij.png" />
                    <div className="text-highBrown">امیرحسین</div>
                    <div className="text-lowBrown">آرمان‌نیا</div>
                </div>
                <div className='spaceImageMainMobile'>
                    <img className='ImageMobile' src='./richhavich-bg.png'/>
                </div>  
                <div className="subtextMobile">
                    <div className="text-highBrown">ریچ</div>
                    <div className="text-lowBrown">هویج</div>
                </div>   
            </div>
        </div>
    )
}
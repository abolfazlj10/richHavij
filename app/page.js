import Navbar from './components/navbar'
export default function Home() {
  return (
    <>
      <Navbar/>
      <div className="oneScreen">

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
          <img src='./ChevronsDown.svg' />
        </div>
      </div>

      <div className="h-screen bg-highBlue">screen 2</div>
      <div className="h-screen bg-lowBlue">screen 3</div>
    </>
  );
}
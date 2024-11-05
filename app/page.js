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

      <div className="twoScreen">
        <div className='grid-cols-subgrid col-span-2'></div>
        <div className='aboutTitle'>
          <img className='fingerprint' src='./fingerprint.svg' />
          <div className='nameAbout'>موج‌آرمان؟!</div>
        </div>
        <div className='grid-cols-subgrid col-span-1'></div>
        <div className='aboutText'>
          سلام! <br/>
          من مجتبی‌اَم؛ یه جَوونِ کنجکاو با هدف های بزرگ، همونی که هیچوقت نمره‌ی 20 کلاس رو نمی‌گرفته ولی وقتی صحبت از مسائل دیگه می‌شده مخی بوده واسه خودش! 
          19 سالمه و به‌تازگی پام به دانشگاه باز شده، زبان‌انگلیسی می‌خونم چون به‌نظرم کاربردیه. <br/>
          دوستام بهم میگم <span className='thingFrench'>آچار فرانسه</span>، هرکاری ازم برمیاد و اگه بهم وظیفه‌ای بدی، اون کار روی زمین نمی‌مونه، و دقیقا واسه همینه که میتونی بهم اعتماد کنی! <br/>
          <b>پس بیا گپ بزنیم!</b>
        </div>
        <div>
          <img src='./MowjSign.svg' />
        </div>
        <div className="arrowDown">
          <img src='./ChevronsDown.svg' />
        </div>
      </div>
      <div className="h-screen bg-lowBlue">خدا</div>
    </>
  );
}
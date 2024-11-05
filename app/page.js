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
      <div className="thirdScreen">
        <div className='flex mb-10'>
          <img className='w-[200px] h-[200px]' src='./like.png' />
          <div className='text-highBlue font-hasti text-[120px] mt-24 -mr-16'>ارتباط با من</div>
        </div>
        <div className=' flex flex-col flex-1 font-hasti text-[50px]'>
          <div className='flex-1 flex justify-around'>
            <div className='text-[#D44638] mt-14'>جیمیل</div>
            <div className='text-[#0088CC] mt-5'>تلگرام</div>
            <div className='text-yellow-200 -mt-10'>اینستاگرام</div>
          </div>
          <div className='flex-1 flex justify-around pr-64'>
            <div className='text-[#0A66C2]'>لینکدین</div>
            <div className='text-[#25D366] -mt-14'>واتسپ</div>
            <div className='text-[#060606] mt-14'>ایکس</div>
          </div>
        </div>
        <div className='flex justify-center'><a href='https://mehdi-arman-s-project.vercel.app/'><img src='./desginer.svg'/></a></div>
      </div>
    </>
  );
}
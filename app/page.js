import Navbar from './components/navbar'
import OnceScreen from './components/onceScreen';
import SecondScreen from './components/secondScreen';
import ThirdScreen from './components/thirdScreen';
export default function Home() {
  return (
    <div className='parent'>
      <Navbar/>
      <OnceScreen />
      <SecondScreen />
      <ThirdScreen />
    </div>
  );
}
import Navbar from './components/navbar'
export default function Home() {
  return (
    <>
      <Navbar/>
      <div className="h-screen bg-gradient-to-b from-[#62CFF4] to-[#2C67F2]">screen 1</div>

      <div className="h-screen bg-highBlue">screen 2</div>
      <div className="h-screen bg-lowBlue">screen 3</div>
    </>
  );
}
import image from '../assets/Logo.png'

export function Header() {
  return (
    <div className='flex bg-gray-700 h-[200px] max-w-[1440px] items-center justify-center mx-auto'> 
      <img src={image} alt="" />
    </div>
  )

}

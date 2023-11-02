import github from '../../../assets/social.png'
import google from '../../../assets/google.png'
import facebook from '../../../assets/facebook.png'
import twitter from '../../../assets/twitter.png'
import whatsApp from '../../../assets/whatsapp.png'
import zone1 from '../../../assets/qZone1.png'
import zone2 from '../../../assets/qZone2.png'
import zone3 from '../../../assets/qZone3.png'


const RightSideNav = () => {
    return (
       <div>
            <div className='mb-10'>
                <h1 className="text-2xl font-bold">Login With</h1>
                <button className="btn w-full mt-2 text-xl font-semibold">
                    <img src={google} className='w-6' />
                Login With Google
                </button>
                <button className="btn w-full mt-2 text-xl font-semibold">
                    <img src={github} className='w-6' />
                    Login With Github
                </button>
            </div>

            <div>
                <h1 className="text-2xl font-bold mb-2">Find Us On</h1>
              <div className='border rounded-lg odd:bg-white even:bg-slate-50'>
                    <button className=' text-xl font-regular border-t border-b py-4 w-full'>
                    <a href="" className='flex justify-center gap-2'>
                    <img src={facebook} className='w-6' />
                        Facebook
                    </a>
                    </button>
                    <button className=' text-xl font-regular border-t border-b py-4 w-full'>
                    <a href="" className='flex justify-center gap-2'>
                    <img src={twitter} className='w-6' />
                        Twitter
                    </a>
                    </button>
                    <button className='flex justify-center gap-2 text-xl font-regular border-t border-b py-4 w-full'>
                        <img src={whatsApp} className='w-6' />
                        Whats app
                    </button>
                
                </div>
            </div>

            <div className='bg-[#F3F3F3] mt-10 p-6 rounded'>
                <h1 className='text-2xl font-bold'>Q Zone</h1>
                <div className='flex flex-col justify-center items-center'>
                    <img src={zone1} className='mb-6 ' />
                    <img src={zone2} className='mb-6' />
                    <img src={zone3} className='mb-6' />  
                </div>
            </div>
       </div>
    );
};

export default RightSideNav;
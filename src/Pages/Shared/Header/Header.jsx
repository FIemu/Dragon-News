import logo from '../../../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div className='text-center space-y-4'>
            <img src={logo} alt="" className='mx-auto mt-12'/>
            <p className='text-[#706F6F] font-semibold text-xl'>Journalism Without Fear or Favour</p>
            <p className='text-xl text-[#706F6F] font-semibold'><span className='text-black'>{moment().format("dddd")},</span> {moment().format("MMMM D , YYYY")}</p>
        </div>
    );
};

export default Header;
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
function BodyHead() {
    return (  
        <div className='flex justify-between mt-4'>
            <div className='flex items-center'><h1 className='text-[#00B0F0]'>Dashboard</h1> <KeyboardArrowRightIcon /> <h1 className='text-[#00B0F0]'>Performance</h1> <KeyboardArrowRightIcon /> <h1>Outreaches</h1></div>
            
            <input type="month" className="calendar border-b-2 border-black" id="outreachesCalender" name="month" style={{background:"none"}}/>
        </div>
    );
}

// 00B0F0
export default BodyHead;
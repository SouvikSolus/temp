function ReportsBody({val,text}) {
    return(
        <div>
            {text==="outreaches"?(
            <div className="bg-[#D6F0FA] p-6 rounded-lg">
                <p className="text-[#000000]">{val}</p>
                <p className="text-[#000000]">{text}</p>
            </div>
    ):(
            <div className="bg-white p-6 rounded-lg">
                <p className="text-[#000000]">{val}</p>
                <p className="text-[#000000]">{text}</p>
            </div>
    )}

        </div>
    )
    
}

export default ReportsBody;
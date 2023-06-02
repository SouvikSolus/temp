import ReportsBody from "./ReportsBody";

const reports=[
    {
        val:"0",
        text:"outreaches"
    },
    {
        val:"0.0",
        text:"Delivered%"
    },
    {
        val:"0.0%",
        text:"Offer Based"
    },
    {
        val:"0.0%",
        text:"Channel Mix(SMS)"
    },
    {
        val:"0.0%",
        text:"Customer Coverage"
    },
    {
        val:"0",
        text:"Outreaches/Cust"
    },
    {
        val:"0",
        text:"Triggers"
    },
    {
        val:"0.0%",
        text:"Open %"
    }


]

function Reports() {
    return ( 
        <div className="bg-[#F8F8F8] mt-0">
            <div className="mt-4 bg-[#00B0F0] p-2 rounded-lg">
                <p className="text-[#FFFFFF] font-semibold">Outreach Reports for May</p>
            </div>
            <div className="grid grid-cols-4 gap-4 mt-2">
                {reports.map((report,index)=><ReportsBody val={report.val} text={report.text} />)}
            </div>
        </div>
     );
}

export default Reports;
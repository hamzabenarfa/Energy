import { Disc, Power } from "lucide-react";

const Consomation = () => {
    return ( 
    <div className="flex flex-col w-fullk">

        <div className="flex justify-between p-4 bg-orange-200">
            <h1>1701/P11</h1>

            <span className="flex">  <h1>+52Min </h1><Disc className="text-red-800 w-6 h-6" /></span>
        </div>
        <div className="bg-blue-200 p-4 space-y-2">

        <div className="">
            <h1 className="text-center">Consommation</h1>
            <div className="flex flex-row items-center">
                <h1 className="bg-green-500 px-4 py-2 w-full text-center font-bold">1046.98KWHh</h1>
                <Power className="text-red-800 w-6 h-6"/>   
            </div>

            <div></div>

        </div>




        <div>
        </div>
        </div>
    </div> );
}
 
export default Consomation;
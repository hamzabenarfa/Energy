import { Button } from "@/components/ui/button";

import {
  AlertTriangle,
  LampDesk,
  Gauge,
  ZapOff,
  Zap,
} from "lucide-react";
const Alert = () => {
    return ( 
        <div className="p-2 ">
        <h1 className="text-2xl font-semibold text-center text-gray-800">Alert</h1>
        <div className="flex flex-col gap-1">
         
          <Button type="button" variant="outline" size="lg">
            <AlertTriangle />
            <p>24</p>
          </Button>
          <Button type="button" variant="outline" size="lg" className="">
            <LampDesk />
            <p>4</p>
          </Button>
        
       
          <Button type="button" variant="outline" size="lg" className="">
            <Gauge />
            <p>4</p>
          </Button>
          <Button type="button" variant="outline" size="lg" className="">
            <ZapOff />
            <p>0</p>
          </Button>
         
          <Button type="button" variant="outline" size="lg">
            <Zap />
            <p>2</p>
          </Button>
          
        </div>
      </div>
     );
}
 
export default Alert;
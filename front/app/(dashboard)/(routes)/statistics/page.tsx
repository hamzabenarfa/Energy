
import AreaChart from "./_components/area-chart";
import { BarChart } from "./_components/vertical-bar-chart";
import LineChart from "./_components/line-chart";
import { HorizontalBarChart } from "./_components/horizental-bar-chart";
import {StackedBarChart} from "./_components/stacked-bar-chart";
import { MultitypeChart } from "./_components/multitype-chart";
const Statistics = () => {
  return (
    <div>
    

      <div className="flex flex-row items-center justify-around">
      <div className="w-1/3">
        <LineChart />
        <HorizontalBarChart />
        <AreaChart />
      </div>
      <div className="w-1/3">
        <BarChart />
        <StackedBarChart />
        <MultitypeChart />
      </div>
    </div>
    </div>
  );
};

export default Statistics;

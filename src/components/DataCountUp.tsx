"use client";
import CountUp from "react-countup";

interface DataCountUpProps {
  start?: number;
  end?: number;
  suffix?: string;
}

const DataCountUp: React.FC<DataCountUpProps> = ({ start = 0, end = 100, suffix}) => {
  return <CountUp start={start} end={end} duration={15} suffix={suffix} />;
};

export default DataCountUp;

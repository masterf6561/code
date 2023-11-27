import { timelineText } from "./timeline_text";

const backgroundMapping = {
  Career: "bg-gray-500",
  Personal: "bg-gray-300",
  Other: "bg-gray-400",
};

interface Data{
  text: string;
  date: string;
  tag: string;
}

const TimelineItem = ({ data }: {data: Data}) => {
  return (
    <div className="flex justify-end relative p-0.5 w-1/2">
      <div
        className={`shadow-md rounded ${backgroundMapping[data.tag]} flex flex-col items-end p-5 w-400 max-w-70 text-right`}
      >
        <div className="bg-white shadow-md absolute right-0 top-1/2 transform translate-y-[-50%] translate-x-1/2 rotate-45 w-15 h-15"></div>
        <div
          className={`tag absolute text-white font-bold text-xs top-5 left-5 uppercase p-5 ${backgroundMapping[data.tag]}`}
        >
          {data.tag}
        </div>
        <time className="text-gray-700 font-bold text-xs">{data.date}</time>
        <p className="text-base leading-6 mt-15">{data.text}</p>
        <span className="text-base font-bold">Link ►</span>
        <div className="circle absolute bg-white border-3 border-black rounded-full top-1/2 right-[-40px] transform translate-y-[-50%]"></div>
      </div>
    </div>
  );
};

export const Timeline = () =>
  timelineText.length > 0 && (
    <div className="flex flex-col relative m-40">
      {/* Timeline Line */}
      <div className="bg-gray-600 absolute left-1/2 w-4 h-full transform -translate-x-1/2"></div>

      {/* Timeline Items */}
      {timelineText.map((data, idx) => (
        <TimelineItem data={data} key={idx} />
      ))}
    </div>
  );

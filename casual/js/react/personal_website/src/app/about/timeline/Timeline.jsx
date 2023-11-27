import "./Timeline.css";
import {timelineText} from "./timeline_text";

const background_mapping = {
  Career: "#222222",
  Personal: "#888888",
  Other: "#444444",
}

const TimelineItem = ({data}) => {
  return(
    <div className="timeline-item">
        <div className="timeline-item-content">
            <span className="tag" style={{ background: background_mapping[data.tag]}}>
                {data.tag}
            </span>
            <time>{data.date}</time>
            <p>{data.text}</p>
            <span className="circle" />
        </div>
    </div> 
  )
}

export const Timeline = () =>
    timelineText.length > 0 && (
        <div className="timeline-container">
            {timelineText.map((data, idx) => (
                <TimelineItem data={data} key={idx} />
            ))}
        </div>
    );

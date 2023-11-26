import sys
import time

import gi
gi.require_version("Gst", "1.0")
from gi.repository import Gst # type: ignore

def main(argv: list[str]):
    Gst.init(argv)

    pipeline = Gst.parse_launch("playbin uri=sample-9s.mp3")

    src = Gst.ElementFactory.make("videotestsrc", "video-source")
    sink = Gst.ElementFactory.make("autoaudiosink", "audio-sink")

    src.set_property("pattern", "ball")
    src.set_property("background-color", 0xFFFF0000)

    pipeline.add(src)
    pipeline.add(sink)

    src.link(sink)

    pipeline.set_state(Gst.State.PLAYING)
    
    time.sleep(5)
    print("Pipeline done")

    pipeline.set_state(Gst.State.NULL)

    return 0

if __name__ == "__main__":
    sys.exit(main(sys.argv))

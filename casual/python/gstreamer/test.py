#!/usr/bin/env python3

import sys
import time

import gi
gi.require_version("Gst", "1.0")
from gi.repository import Gst # type: ignore

def main(argv: list[str]):
    Gst.init(argv)

    pipeline = Gst.Pipeline.new("mypipeline")

    src = Gst.ElementFactory.make("videotestsrc")
    sink = Gst.ElementFactory.make("autovideosink")

    src.set_property("pattern", "ball")
    src.set_property("background-color", 0x00FF0000)

    pipeline.add(src)
    pipeline.add(sink)

    src.link(sink)

    pipeline.set_state(Gst.State.PLAYING)

    time.sleep(5)

    pipeline.set_state(Gst.State.NULL)

    return 0

if __name__ == "__main__":
    sys.exit(main(sys.argv))

import VideoInfo from "src/components/Detail/VideoInfo";
import VideoPlayerDetail from "src/components/Detail/VideoPlayerDetail";

interface Props {}

export default function VideoPage({}: Props) {
  return (
    <div className="flex h-screen flex-col text-white lg:flex-row">
      <VideoPlayerDetail />
      <VideoInfo />
    </div>
  );
}

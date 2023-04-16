import Info from "src/components/Account/Info";
import VideoList from "src/components/Account/VideoList";
import AppLayout from "src/layouts/AppLayout";

interface Props {}

export default function ProfilePage({}: Props) {
  return (
    <AppLayout>
      <div className="mt-5 w-full">
        <Info />
        <div className="mt-5 w-full">
          <VideoList />
        </div>
      </div>
    </AppLayout>
  );
}

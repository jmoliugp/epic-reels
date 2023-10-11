import Main from 'src/components/Main';
import Sidebar from 'src/components/Sidebar';
import AppLayout from 'src/layouts/AppLayout';

export default function HomePage() {
  return (
    <AppLayout>
      <Sidebar />
      <Main />
    </AppLayout>
  );
}

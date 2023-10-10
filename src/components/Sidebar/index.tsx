import AccountSidebar from 'src/components/Sidebar/AccountSidebar';
import LoginButton from 'src/components/Sidebar/LoginButton';
import Menu from 'src/components/Sidebar/Menu';

export default function Sidebar() {
  return (
    <aside className='scrollbar-none fixed bottom-0 top-[48px] z-[9998] overflow-y-scroll border-r border-[#2f2f2f] bg-[#121212] pt-5 md:left-auto lg:top-[56px] lg:mr-[6px] lg:w-[348px] lg:border-none lg:pl-2'>
      <Menu />
      <LoginButton />
      <AccountSidebar />
      <AccountSidebar />
    </aside>
  );
}

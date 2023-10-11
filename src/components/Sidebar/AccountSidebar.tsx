import { useSession } from 'next-auth/react';
import AccountSidebarItem from 'src/components/Sidebar/AccountSidebarItem';
import { Account } from 'src/types';
import { trpc } from 'src/utils/trpc';

interface Props {
  title: 'Suggested accounts' | 'Following accounts';
  type: 'getAccountsSuggestion' | 'getAccountsFollowing';
}

export default function AccountSidebar({ title, type }: Props) {
  function getAccount() {
    if (type === 'getAccountsFollowing' && session?.user) {
      // TODO: perform getAccountFollowing.
      return trpc.follow.getAccountsSuggestion.useQuery();
    }

    return trpc.follow.getAccountsSuggestion.useQuery();
  }

  const { data: session } = useSession();
  const { data, isLoading } = getAccount();

  if (isLoading) return null;
  if (!session?.user && type === 'getAccountsFollowing') return null;

  return (
    <div className='border-t border-[#484848] py-4'>
      <h3 className='mb-2 hidden px-2 text-sm font-medium lg:block'>{title}</h3>
      <div>
        {data?.accounts.map((item) => {
          return <AccountSidebarItem key={item.id} account={item as Account} />;
        })}
      </div>
    </div>
  );
}

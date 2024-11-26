import { UserButton } from '@/features/auth/components/user-button';
import { redirect } from 'next/navigation';
import { getCurrent } from '@/features/auth/queries';
import { CreateWorkspaceForm } from '@/features/workspaces/components/create-workspace-form';

export default async function Home() {
  const user = await getCurrent();

  if (!user) {
    redirect('/sign-in');
  }

  return (
    <div>
      <UserButton></UserButton>
      <CreateWorkspaceForm></CreateWorkspaceForm>
    </div>
  );
}

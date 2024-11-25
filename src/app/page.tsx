'use client';

import { useCurrent } from '@/features/auth/api/use-current';
import { useEffect } from 'react';
import { useLogout } from '@/features/auth/api/use-logout';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export default function Home() {
  const { data, isLoading } = useCurrent();
  const { mutate } = useLogout();
  const router = useRouter();

  useEffect(() => {
    if (!data && !isLoading) {
      router.push('/sign-in');
    }
  }, [data]);

  return (
    <div>
      Only visible to authorized users
      <Button onClick={() => mutate()}></Button>
    </div>
  );
}

'use client';

import { useCurrent } from '@/features/auth/api/use-current';
import { useEffect } from 'react';
import { router } from 'next/client';
import { useLogout } from '@/features/auth/api/use-logout';
import { Button } from '@/components/ui/button';
export default function Home() {
  const { data, isLoading } = useCurrent();
  const { mutate } = useLogout();

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

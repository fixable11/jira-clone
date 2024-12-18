import Image from 'next/image';
import Link from 'next/link';

import { Navigation } from './navigation';
import { Projects } from './projects';
import { DottedSeparator } from './dotted-separator';
import { WorkspaceSwitcher } from '@/components/workspace-switcher';

export const Sidebar = () => {
  return (
    <section className="h-full bg-neutral-100 p-4 w-full">
      <Link href="/" className="flex items-center">
        <Image src="/logo.svg" alt="logo" width={44} height={28} />
        <h1 className="text-2xl font-semibold ml-2">Jira clone</h1>
      </Link>
      <DottedSeparator className="my-4" />
      <WorkspaceSwitcher></WorkspaceSwitcher>
      <DottedSeparator className="my-4" />
      <Navigation />
      <DottedSeparator className="my-4" />
      <Projects />
    </section>
  );
};

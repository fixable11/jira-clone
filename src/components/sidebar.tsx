import Image from 'next/image';
import Link from 'next/link';

import { Navigation } from './navigation';
import { DottedSeparator } from './dotted-separator';

export const Sidebar = () => {
  return (
    <section className="h-full bg-neutral-100 p-4 w-full">
      <Link href="/">
        <Image src="/logo.svg" alt="logo" width={94} height={28} />
      </Link>
      <DottedSeparator className="my-4" />
      <DottedSeparator className="my-4" />
      <Navigation />
      <DottedSeparator className="my-4" />
    </section>
  );
};

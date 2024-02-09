'use client';

import { useTransition } from 'react';
import { useRouter, usePathname } from '../navigation';

type Props = {
  defaultValue: string;
  label: string;
};

export default function LocaleSwitcherSelect({ defaultValue, label }: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();

  function onSelectChange() {
    startTransition(() => {
      router.replace(pathname, { locale: defaultValue });
    });
  }

  return <a onClick={onSelectChange}>{label}</a>;
}

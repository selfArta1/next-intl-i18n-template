import { syhFont, sysFont } from '../styles/fonts/fonts';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { ReactNode } from 'react';
import { locales } from '../../config';
import NavBar from '@/components/NavBar';

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params: { locale } }: Omit<Props, 'children'>) {
  const t = await getTranslations({ locale, namespace: 'LocaleLayout' });

  return {
    title: t('title'),
  };
}

export default async function LocaleLayout({ children, params: { locale } }: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  return (
    <html lang={locale} data-theme="cupcake">
      <body className={sysFont.className}>
        <NavBar />
        <main className="m-auto flex h-full w-full justify-center">{children}</main>
      </body>
    </html>
  );
}

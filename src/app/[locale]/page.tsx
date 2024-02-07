import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';

type Props = {
  params: { locale: string };
};

export default function Home({ params: { locale } }: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  const t = useTranslations('HomePage');

  return (
    <div className="hero min-h-screen bg-base-100">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1>
            假设我们有一个用户卡片组件，它可以显示为正常、高亮或禁用状态。基于这些状态，卡片的样式类将会改变。 使用
            clsx，我们可以轻松地构建这个组件的类名。
          </h1>
          <h2>
            {t.rich('description', {
              code: (chunks) => <code className="font-mono text-red-500">{chunks}</code>,
            })}
          </h2>
        </div>
      </div>
    </div>
  );
}

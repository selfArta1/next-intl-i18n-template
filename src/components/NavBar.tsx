import { useTranslations } from 'next-intl';
import LocaleSwitcherSelect from './LocaleSwitcherSelect';

export default function NavBar() {
  const t = useTranslations('NavBar');
  return (
    <div className="sticky top-0 min-w-[300px] grow  bg-base-200 z-10">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
            >
              <li>
                <a>{t('menu01')}</a>
              </li>
              <li>
                <a>{t('menu02')}</a>
              </li>
              <li>
                <a>{t('menu03')}</a>
              </li>
              <li>
                <a>{t('menu04')}</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">SelfArt</a>
        </div>
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>{t('menu01')}</a>
            </li>
            <li>
              <a>{t('menu02')}</a>
            </li>
            <li>
              <a>{t('menu03')}</a>
            </li>
            <li>
              <a>{t('menu04')}</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-hover dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802"
                />
              </svg>
            </div>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-24">
              <li>
                <LocaleSwitcherSelect defaultValue={'zh'} label={'中文'}></LocaleSwitcherSelect>
              </li>
              <li>
                <LocaleSwitcherSelect defaultValue={'en'} label={'English'}></LocaleSwitcherSelect>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

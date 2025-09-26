'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function BottomTabBar() {
  const pathname = usePathname();

  const tabs = [
    { href: '/',           label: 'Feed',   icon: '🏠', isActive: () => pathname === '/' || pathname === '/home-v2' },
    { href: '/perfil/demo', label: 'Perfil', icon: '👤', isActive: () => pathname.startsWith('/perfil') },
  ];

  return (
    <nav
      aria-label="Navegação principal"
      className="fixed bottom-0 inset-x-0 z-40 border-t bg-white md:hidden"
    >
      <ul className="grid grid-cols-2">
        {tabs.map(tab => {
          const active = tab.isActive();
          return (
            <li key={tab.href}>
              <Link
                href={tab.href}
                aria-current={active ? 'page' : undefined}
                className={[
                  'flex flex-col items-center justify-center py-2 text-sm',
                  active ? 'text-red-600 font-semibold' : 'text-gray-700'
                ].join(' ')}
              >
                <span aria-hidden="true" className="text-base leading-none">{tab.icon}</span>
                <span className="mt-0.5">{tab.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

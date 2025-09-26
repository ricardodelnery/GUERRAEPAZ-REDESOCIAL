'use client';
import { useEffect } from 'react';
import { UiProvider, useUi } from '../../lib/ui/UiContext';
import SearchSheet from './SearchSheetClient';
import NotifDrawer from './NotifDrawerClient';

function HostInner({ children }: { children: React.ReactNode }) {
  const { searchOpen, notifOpen, openSearch, closeSearch, openNotif, closeNotif } = useUi();

  useEffect(() => {
    const onOpenSearch = (e: Event) => openSearch((e as CustomEvent).detail?.from ?? null);
    const onCloseSearch = () => closeSearch();
    const onOpenNotif  = (e: Event) => openNotif((e as CustomEvent).detail?.from ?? null);
    const onCloseNotif = () => closeNotif();

    window.addEventListener('ui:openSearch', onOpenSearch as EventListener);
    window.addEventListener('ui:closeSearch', onCloseSearch as EventListener);
    window.addEventListener('ui:openNotif',  onOpenNotif as EventListener);
    window.addEventListener('ui:closeNotif', onCloseNotif as EventListener);
    return () => {
      window.removeEventListener('ui:openSearch', onOpenSearch as EventListener);
      window.removeEventListener('ui:closeSearch', onCloseSearch as EventListener);
      window.removeEventListener('ui:openNotif',  onOpenNotif as EventListener);
      window.removeEventListener('ui:closeNotif', onCloseNotif as EventListener);
    };
  }, [openSearch, closeSearch, openNotif, closeNotif]);

  return (
    <>
      {/* children (páginas) */}
      {children}
      {/* Modais globais controlados por contexto */}
      <SearchSheet open={searchOpen} onClose={closeSearch} />
      <NotifDrawer open={notifOpen} onClose={closeNotif} />
    </>
  );
}

export default function ClientUiHost({ children }: { children: React.ReactNode }) {
  return (
    <UiProvider>
      <HostInner>{children}</HostInner>
    </UiProvider>
  );
}

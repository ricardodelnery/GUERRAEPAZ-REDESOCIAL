'use client';
import React, { createContext, useCallback, useContext, useRef, useState } from 'react';

type UiState = {
  searchOpen: boolean;
  notifOpen: boolean;
  openSearch: (from?: HTMLElement |( _from?: HTMLElement | null) => void;
  closeSearch: () => void;
  openNotif: (from?: HTMLElement |( _from?: HTMLElement | null) => void;
  closeNotif: () => void;
  lastTriggerRef: React.MutableRefObject<HTMLElement | null>;
};

const Ctx = createContext<UiState | null>(null);

export function UiProvider({ children }: { children: React.ReactNode }) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const lastTriggerRef = useRef<HTMLElement | null>(null);

  const openSearch = useCallback((from?: HTMLElement |( _from?: HTMLElement | null) => {
    lastTriggerRef.current = (from ??( _from?: HTMLElement | null);
    setSearchOpen(true);
    document.documentElement.classList.add('overflow-hidden');
  }, []);
  const closeSearch = useCallback(() => {
    setSearchOpen(false);
    document.documentElement.classList.remove('overflow-hidden');
    lastTriggerRef.current?.focus?.();
  }, []);

  const openNotif = useCallback((from?: HTMLElement |( _from?: HTMLElement | null) => {
    lastTriggerRef.current = (from ??( _from?: HTMLElement | null);
    setNotifOpen(true);
  }, []);
  const closeNotif = useCallback(() => {
    setNotifOpen(false);
    lastTriggerRef.current?.focus?.();
  }, []);

  return (
    <Ctx.Provider value={{ searchOpen, notifOpen, openSearch, closeSearch, openNotif, closeNotif, lastTriggerRef }}>
      {children}
    </Ctx.Provider>
  );
}

export function useUi() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error('useUi must be used within <UiProvider>');
  return ctx;
}

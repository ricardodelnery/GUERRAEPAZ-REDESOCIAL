'use client';
import React, { createContext, useCallback, useContext, useRef, useState } from 'react';

type Trigger = HTMLElement | null;
type VoidFn = () => void;
type OpenFn = (_from?: Trigger) => void;

type UiState = {
  searchOpen: boolean;
  notifOpen: boolean;
  openSearch: OpenFn;
  closeSearch: VoidFn;
  openNotif: OpenFn;
  closeNotif: VoidFn;
  lastTriggerRef: React.MutableRefObject<HTMLElement | null>;
};

const Ctx = createContext<UiState | null>(null);

export function UiProvider({ children }: { children: React.ReactNode }) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const lastTriggerRef = useRef<HTMLElement | null>(null);

  const openSearch: OpenFn = useCallback((_from?: Trigger) => {
    lastTriggerRef.current = _from ?? null;
    setSearchOpen(true);
    if (typeof document !== 'undefined') {
      document.documentElement.classList.add('overflow-hidden');
    }
  }, []);

  const closeSearch: VoidFn = useCallback(() => {
    setSearchOpen(false);
    if (typeof document !== 'undefined') {
      document.documentElement.classList.remove('overflow-hidden');
    }
    lastTriggerRef.current?.focus?.();
  }, []);

  const openNotif: OpenFn = useCallback((_from?: Trigger) => {
    lastTriggerRef.current = _from ?? null;
    setNotifOpen(true);
    if (typeof document !== 'undefined') {
      document.documentElement.classList.add('overflow-hidden');
    }
  }, []);

  const closeNotif: VoidFn = useCallback(() => {
    setNotifOpen(false);
    if (typeof document !== 'undefined') {
      document.documentElement.classList.remove('overflow-hidden');
    }
    lastTriggerRef.current?.focus?.();
  }, []);

  const value: UiState = {
    searchOpen, notifOpen,
    openSearch, closeSearch,
    openNotif, closeNotif,
    lastTriggerRef
  };

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useUi() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error('useUi must be used within UiProvider');
  return ctx;
}

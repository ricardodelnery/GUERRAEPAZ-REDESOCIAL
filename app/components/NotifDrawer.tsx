'use client';
import { useState } from 'react';
export default function NotifDrawer() {
  const [open] = useState(false);
  return (
    <aside role="complementary" aria-label="NotifDrawer" aria-hidden={!open} hidden={!open} />
  );
}

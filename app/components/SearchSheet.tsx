'use client';
import { useState } from 'react';
export default function SearchSheet() {
  const [open] = useState(false);
  return (
    <div role="dialog" aria-label="SearchSheet" aria-hidden={!open} hidden={!open} />
  );
}

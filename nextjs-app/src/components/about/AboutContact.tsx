'use client';

import React from 'react';
import { useScrollReveal } from '@/lib';
import { Contact } from '@/components/home/Contact';

export function AboutContact() {
  useScrollReveal();
  return <Contact />;
}

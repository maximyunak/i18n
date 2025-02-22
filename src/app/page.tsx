'use client';

import Image from 'next/image';
import { decrement, increment } from '@/shared/counterSlice';
import { useAppDispatch, useAppSelector } from '@/shared/hooks/hooks';
import { Button, Card, Input, Select, SelectItem } from '@heroui/react';

export default function Home() {
  const { value } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  return <div>{value}</div>;
}

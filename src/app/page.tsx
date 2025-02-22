'use client';

import { useAppDispatch, useAppSelector } from '@/shared/hooks/hooks';

export default function Home() {
  const { value } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  return <div>{value}</div>;
}

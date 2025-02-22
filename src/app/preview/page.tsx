'use client';

import { Card } from '@heroui/react';

export default function PreviewPage() {
  return (
    <div className="space-y-8">
      {/* Breakpoints */}
      <Card className="p-4">
        <h2 className="text-2xl font-bold mb-4">Breakpoints</h2>
        <div className="space-y-2">
          <p>sm: 640px - @media (min-width: 640px)</p>
          <p>md: 768px - @media (min-width: 768px)</p>
          <p>lg: 1024px - @media (min-width: 1024px)</p>
          <p>xl: 1280px - @media (min-width: 1280px)</p>
          <p>2xl: 1536px - @media (min-width: 1536px)</p>
        </div>
      </Card>

      {/* Container */}
      <Card className="p-4">
        <h2 className="text-2xl font-bold mb-4">Container Sizes</h2>
        <div className="space-y-2">
          <p>sm: 640px</p>
          <p>md: 768px</p>
          <p>lg: 1024px</p>
          <p>xl: 1280px</p>
          <p>2xl: 1536px</p>
          <p>Usage: className="container mx-auto"</p>
        </div>
      </Card>
    </div>
  );
}

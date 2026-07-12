'use client';

import * as Icons from 'lucide-react';
import { CircleHelp, LucideProps } from 'lucide-react';


console.log(Icons);

interface DynamicIconProps extends LucideProps {
  name: string;
  className?: string;
}

export default function DynamicIcon({
  name,
  className,
  ...props
}: DynamicIconProps) {
  const Icon = Object.prototype.hasOwnProperty.call(Icons, name)
    ? (Icons[name as keyof typeof Icons] as React.ComponentType<LucideProps>)
    : CircleHelp;

  return <Icon className={className} {...props} />;
}
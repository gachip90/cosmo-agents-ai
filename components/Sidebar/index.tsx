'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Box, NavLink } from '@mantine/core';
import { Star, Speaker, Book, Mobile, Channel } from '@/assets/icons';

interface NavLinkData {
  icon?: React.ComponentType<{ size: string; stroke: number }>;
  label: string;
  path: string;
  description?: string;
  rightSection?: string;
  children?: NavLinkData[];
}

const navLinkData: NavLinkData[] = [
  { icon: Star, label: 'AI Inboxes', path: '/ai-inboxes' },
  { icon: Speaker, label: 'Campaign', path: '/campaign' },
  { icon: Mobile, label: 'Contacts', path: '/contacts' },
  {
    icon: Book,
    label: 'Knowledge',
    path: '/knowledge',
    children: [
      { label: 'Source', path: '/knowledge/source' },
      { label: 'Content', path: '/knowledge/content' },
      { label: 'AI Playground', path: '/knowledge/ai-playground' },
    ],
  },
  { icon: Channel, label: 'Integration', path: '/integration' },
];

const Sidebar = () => {
  const pathname = usePathname();
  const [active, setActive] = useState<string | null>(pathname);

  useEffect(() => {
    setActive(pathname);
  }, [pathname]);

  const renderNavLink = (
    item: NavLinkData,
    index: number,
    parentIndex: string | null = null
  ): React.ReactNode => {
    const currentPath = parentIndex !== null ? `${parentIndex}-${index}` : index.toString();
    const isActive = pathname === item.path;

    return (
      <NavLink
        key={item.label}
        active={isActive}
        label={item.label}
        description={item.description}
        rightSection={item.rightSection}
        leftSection={item.icon && <item.icon size="1rem" stroke={1.5} />}
        color="dark"
        variant="filled"
        component={Link}
        href={item.path}
        onClick={() => setActive(item.path)}
      >
        {item.children &&
          item.children.map((child, childIndex) => renderNavLink(child, childIndex, index))}
      </NavLink>
    );
  };

  const items = navLinkData.map((item, index) => renderNavLink(item, index));

  return <Box w={180}>{items}</Box>;
};

export default Sidebar;

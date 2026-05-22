export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

export const mainNav: NavItem[] = [
  { label: 'Apie mus', href: '#apie' },
  { label: 'Paslaugos', href: '#paslaugos' },
  { label: 'Susisiekti', href: '#susisiekti' },
];

export const footerNav: { title: string; items: NavItem[] }[] = [
  {
    title: 'Navigacija',
    items: [
      { label: 'Apie mus', href: '#apie' },
      { label: 'Paslaugos', href: '#paslaugos' },
      { label: 'Susisiekti', href: '#susisiekti' },
    ],
  },
];

export interface INavItemChild {
  label: string;
  href: string;
}

export interface INavItem {
  label: string;
  children: Array<INavItemChild>;
}

const navItems: Array<INavItem> = [
  {
    label: 'Profil Sekolah',
    children: [
      { label: 'Sambutan Kepala Sekolah', href: '/' },
      { label: 'Info Sekolah', href: '/' },
      { label: 'Struktur Organisasi', href: '/' },
    ],
  },
  {
    label: 'Direktori',
    children: [
      { label: 'Data Guru', href: '/' },
      { label: 'Data Siswa', href: '/' },
      { label: 'Prestasi', href: '/' },
    ],
  },
  {
    label: 'Lainnya',
    children: [
      { label: 'Artikel', href: '/' },
      { label: 'Berita', href: '/' },
      { label: 'Galeri', href: '/' },
    ],
  },
];

export default navItems;

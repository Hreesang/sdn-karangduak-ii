export interface INavItemChild {
  label: string;
  href: string;
}

export interface INavItem {
  label: string;
  focusColor: string;
  children: Array<INavItemChild>;
}

const navItems: Array<INavItem> = [
  {
    label: 'Profil Sekolah',
    focusColor: '#ff8700',
    children: [
      { label: 'Sambutan Kepala Sekolah', href: '/' },
      { label: 'Info Sekolah', href: '/' },
      { label: 'Struktur Organisasi', href: '/' },
    ],
  },
  {
    label: 'Direktori',
    focusColor: '#6a4cd7',
    children: [
      { label: 'Data Guru', href: '/' },
      { label: 'Data Siswa', href: '/' },
      { label: 'Prestasi', href: '/' },
    ],
  },
  {
    label: 'Lainnya',
    focusColor: '#00a3ff',
    children: [
      { label: 'Artikel', href: '/' },
      { label: 'Berita', href: '/' },
      { label: 'Galeri', href: '/' },
    ],
  },
];

export default navItems;

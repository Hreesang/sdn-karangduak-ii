import { type IconType } from 'react-icons';
import { BsInstagram, BsYoutube } from 'react-icons/bs';

export interface INavbarUtil {
  label: string;
  href: string;
  icon?: IconType;
}

export const navbarUtils: Array<INavbarUtil> = [
  {
    label: 'Instagram',
    href: 'https://instagram.com/km5_sdnkarangduak2?igshid=YmMyMTA2M2Y=',
    icon: BsInstagram,
  },
  {
    label: 'Youtube',
    href: 'https://youtube.com/@km5_sdnkarangduak2',
    icon: BsYoutube,
  },
];

export interface INavbarCategory {
  label: string;
  items: Array<{
    label: string;
    href: string;
  }>;
}

export interface INavbarMenu {
  label: string;
  focusColor: string;
  categories: Array<INavbarCategory>;
}

export const navbarMenu: Array<INavbarMenu> = [
  {
    label: 'Profil Sekolah',
    focusColor: '#ff8700',
    categories: [
      {
        label: 'Profil Sekolah',
        items: [
          { label: 'Sambutan Kepala Sekolah', href: '/' },
          { label: 'Info Sekolah', href: '/' },
          { label: 'Struktur Organisasi', href: '/' },
        ],
      },
    ],
  },
  {
    label: 'Direktori',
    focusColor: '#6a4cd7',
    categories: [
      {
        label: 'Direktori',
        items: [
          { label: 'Data Guru', href: '/' },
          { label: 'Data Siswa', href: '/' },
          { label: 'Prestasi', href: '/' },
        ],
      },
      {
        label: 'Direktori',
        items: [
          { label: 'Data Guru', href: '/' },
          { label: 'Data Siswa', href: '/' },
          { label: 'Prestasi', href: '/' },
        ],
      },
    ],
  },
  {
    label: 'Lainnya',
    focusColor: '#00a3ff',
    categories: [
      {
        label: 'Lainnya',
        items: [
          { label: 'Artikel', href: '/' },
          { label: 'Berita', href: '/' },
          { label: 'Galeri', href: '/' },
        ],
      },
      {
        label: 'Lainnya',
        items: [
          { label: 'Artikel', href: '/' },
          { label: 'Berita', href: '/' },
          { label: 'Galeri', href: '/' },
        ],
      },
      {
        label: 'Lainnya',
        items: [
          { label: 'Artikel', href: '/' },
          { label: 'Berita', href: '/' },
          { label: 'Galeri', href: '/' },
        ],
      },
    ],
  },
];

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
  id: string;
  label: string;
  items: Array<{
    id: string;
    label: string;
    href: string;
  }>;
}

export interface INavbarMenu {
  id: string;
  label: string;
  focusColor: string;
  categories: Array<INavbarCategory>;
}

export const navbarMenu: Array<INavbarMenu> = [
  {
    id: 'menu-profil-sekolah',
    label: 'Profil Sekolah',
    focusColor: '#ff8700',
    categories: [
      {
        id: 'category-profil-sekolah',
        label: 'Profil Sekolah',
        items: [
          {
            id: 'item-sambutan-kepala-sekolah',
            label: 'Sambutan Kepala Sekolah',
            href: '/',
          },
          {
            id: 'item-info-sekolah',
            label: 'Info Sekolah',
            href: '/',
          },
          {
            id: 'item-struktur-organisasi',
            label: 'Struktur Organisasi',
            href: '/',
          },
        ],
      },
    ],
  },
  {
    id: 'menu-direktori',
    label: 'Direktori',
    focusColor: '#6a4cd7',
    categories: [
      {
        id: 'category-direktori',
        label: 'Direktori',
        items: [
          { id: 'item-data-guru', label: 'Data Guru', href: '/' },
          { id: 'item-data-siswa', label: 'Data Siswa', href: '/' },
          { id: 'item-data-prestasi', label: 'Prestasi', href: '/' },
        ],
      },
      {
        id: 'category-direktori-tmp',
        label: 'Direktori',
        items: [
          { id: 'item-data-guru-tmp', label: 'Data Guru', href: '/' },
          { id: 'item-data-siswa-tmp', label: 'Data Siswa', href: '/' },
          { id: 'item-data-prestasi-tmp', label: 'Prestasi', href: '/' },
        ],
      },
    ],
  },
  {
    id: 'menu-lainnya',
    label: 'Lainnya',
    focusColor: '#00a3ff',
    categories: [
      {
        id: 'category-lainnya',
        label: 'Lainnya',
        items: [
          { id: 'item-artikel', label: 'Artikel', href: '/' },
          { id: 'item-berita', label: 'Berita', href: '/' },
          { id: 'item-galeri', label: 'Galeri', href: '/' },
        ],
      },
      {
        id: 'category-lainnya-tmp-1',
        label: 'Lainnya',
        items: [
          { id: 'item-artikel-tmp-1', label: 'Artikel', href: '/' },
          { id: 'item-berita-tmp-1', label: 'Berita', href: '/' },
          { id: 'item-galeri-tmp-1', label: 'Galeri', href: '/' },
        ],
      },
      {
        id: 'category-lainnya-tmp-2',
        label: 'Lainnya',
        items: [
          { id: 'item-artikel-tmp-2', label: 'Artikel', href: '/' },
          { id: 'item-berita-tmp-2', label: 'Berita', href: '/' },
          { id: 'item-galeri-tmp-2', label: 'Galeri', href: '/' },
        ],
      },
    ],
  },
];

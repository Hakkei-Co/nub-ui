/**
 * Types based on custom elements from Ionic
 * See https://ionicframework.com/docs/api
 */
 import DarkModeToggle from 'dark-mode-toggle';

 declare global {
     const darkModeToggle: typeof DarkModeToggle;
 }

export type Color =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'warning'
  | 'danger'
  | 'success'
  | 'light'
  | 'medium'
  | 'dark'
  | undefined;

export type Fill = 'clear' | 'outline' | 'solid';

export type Size = 'default' | 'small' | 'large';

export type Disabled = 'false' | 'true';

export type Expand = 'block' | 'full' | 'inline-block';

export type Mode = 'ios' | 'md';

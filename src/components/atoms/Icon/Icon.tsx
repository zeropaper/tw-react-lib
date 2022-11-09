import classNames from 'classnames';

import type {
  TShirtSize,
  PropsWithMargins,
  PropsWithPaddings,
  PropsWithClassName,
} from '../../types';

import * as variants from './variants';
export type IconVariant = keyof typeof variants;

export type IconProps = PropsWithClassName<PropsWithPaddings<PropsWithMargins<{
  variant: IconVariant;
  size?: TShirtSize;
}>>>;

export const IconSizes: {
  [key in TShirtSize]: number;
} = {
  xs: 16,
  sm: 24,
  md: 32,
  lg: 48,
  xl: 64,
};

export function Icon({
  variant,
  size = 'md',
  className,
}: IconProps) {

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={classNames(
        'icon',
        'icon-tabler',
        `icon-tabler-${variant}`,
        className
      )}
      width={IconSizes[size]}
      height={IconSizes[size]}
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      dangerouslySetInnerHTML={{
        __html: variants[variant],
      }}
    />
  );
}
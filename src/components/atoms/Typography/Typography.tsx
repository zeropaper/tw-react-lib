import classNames from 'classnames';

import type { ElementType, PropsWithChildren } from 'react';
import type {
  PolymorphicComponentPropWithRef,
  PropsWithClassName,
  PropsWithMargins,
  PropsWithPaddings
} from '../../types';

export const TypographyVariantTagNameMap = {
  display1: 'h1',
  display2: 'h1',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subtitle1: 'h6',
  subtitle2: 'h6',
  body1: 'p',
  body2: 'p',
  caption: 'p',
  strong: 'strong',
  small: 'small',
  pre: 'pre',
  code: 'code',
  // ...
} as const;

type TypographyVariant = keyof typeof TypographyVariantTagNameMap;

type TypographyTagName = typeof TypographyVariantTagNameMap[TypographyVariant] | ElementType

type TypographyProps<C extends ElementType> =
  PolymorphicComponentPropWithRef<
    C,
    PropsWithClassName<PropsWithPaddings<PropsWithMargins<PropsWithChildren<{
      variant?: TypographyVariant;
    }>>>>
  >;

export function Typography({
  as,
  variant,
  className,
  children,
}: TypographyProps<TypographyTagName>) {
  const Component = as
    || (variant && TypographyVariantTagNameMap[variant])
    || 'div';
  return (
    <Component
      className={classNames(className)}
    >
      {children}
    </Component>
  )
}

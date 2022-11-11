export type AsProp<C extends React.ElementType> = {
  as?: C;
};

export type PropsToOmit<C extends React.ElementType, P> = keyof (AsProp<C> & P);

export type PolymorphicComponentProp<
  C extends React.ElementType,
  Props = {}
> = React.PropsWithChildren<Props & AsProp<C>> &
  Omit<React.ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;

export type PolymorphicComponentPropWithRef<
  C extends React.ElementType,
  Props = {}
> = PolymorphicComponentProp<C, Props> &
  { ref?: PolymorphicRef<C> };

export type TShirtSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type PropsWithClassName<P> = P & { className?: string };

export type MarginName = 'm' | 'mt' | 'mr' | 'mb' | 'ml' | 'mx' | 'my';

export type PaddingName = 'p' | 'pt' | 'pr' | 'pb' | 'pl' | 'px' | 'py';

export type NumericalSize = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export type PropsWithMargins<P> = P & Partial<Record<MarginName, NumericalSize>>

export type PropsWithPaddings<P> = P & Partial<Record<PaddingName, NumericalSize>>

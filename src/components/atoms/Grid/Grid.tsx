import classNames from 'classnames';

import type { PropsWithChildren } from "react";
import type { PropsWithClassName, PropsWithMargins, PropsWithPaddings } from "../../types";

const colsClasses = {
  'none': '',
  1: 'grid-cols-1',
  2: 'grid-cols-2',
  3: 'grid-cols-3',
  4: 'grid-cols-4',
  5: 'grid-cols-5',
  6: 'grid-cols-6',
  7: 'grid-cols-7',
  8: 'grid-cols-8',
};

const gapClasses = {
  0: 'gap-0',
  1: 'gap-1',
  2: 'gap-2',
  3: 'gap-3',
  4: 'gap-4',
  5: 'gap-5',
  6: 'gap-6',
  7: 'gap-7',
  8: 'gap-8',
  9: 'gap-9',
  10: 'gap-10',
};

export type GridProps = PropsWithChildren<PropsWithClassName<PropsWithPaddings<PropsWithMargins<{
  cols?: keyof typeof colsClasses;
  gap?: keyof typeof gapClasses;
}>>>>;

export function Grid({
  children,
  className,
  cols = 2,
  gap = 0,
}: GridProps) {
  return (
    <div
      className={classNames(
        'grid',
        // It is truly a shame that we cannot to do this...
        // `grid-cols-${cols}`,
        // `gap-${gap}`,
        // ...and need to do this instead.
        colsClasses[cols],
        gapClasses[gap],
        className
      )}
    >
      {children}
    </div>
  );
}

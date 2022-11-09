import classNames from 'classnames';
import { PropsWithChildren } from 'react';

import type {
  PropsWithClassName,
  PropsWithMargins,
  PropsWithPaddings,
} from '../../types';

export type QuoteProps = PropsWithChildren<PropsWithClassName<PropsWithPaddings<PropsWithMargins<{
  citeUrl?: string;
  captionName?: string;
  captionTitle?: string;
}>>>>;

export function Quote({
  children,
  citeUrl,
  captionName,
  captionTitle,
  className
}: QuoteProps) {
  // TODO: check that children isn't already a single <p> element

  return (
    <figure
      className={classNames(
        className,
      )}
    >
      <blockquote cite={citeUrl}>
        {children}
      </blockquote>

      {captionName && (
        <figcaption>
          —{captionName},
          {captionTitle ? <cite>{captionTitle}</cite> : null}
        </figcaption>
      )}
    </figure>
  )
}
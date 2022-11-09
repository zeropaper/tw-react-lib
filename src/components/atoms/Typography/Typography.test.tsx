import { render, screen } from '../../../../test/utils'
import { Typography } from './Typography'

describe('Typography', async () => {
  it('renders', () => {
    const { getByText } = render(
      <Typography>
        Hello World
      </Typography>,
    );

    expect(getByText('Hello World')).toBeInTheDocument();
  });

  describe('variant prop', () => {
    it.each([
      ['display1', 'h1'],
      ['display2', 'h1'],
      ['h1', 'h1'],
      ['h2', 'h2'],
      ['h3', 'h3'],
      ['h4', 'h4'],
      ['h5', 'h5'],
      ['h6', 'h6'],
      ['subtitle1', 'h6'],
      ['subtitle2', 'h6'],
      ['body1', 'p'],
      ['body2', 'p'],
      ['caption', 'p'],
      ['strong', 'strong'],
      ['small', 'small'],
    ])('renders %s as %s by default but can be overwriten', (variant: any, tag) => {
      render(
        <Typography
          variant={variant}
        >
          variant without as
        </Typography>,
      );

      expect(screen.getByText('variant without as').tagName).toBe(tag.toUpperCase());

      render(
        <Typography
          variant={variant}
          as="div"
        >
          variant with as
        </Typography>,
      );

      expect(screen.getByText('variant with as').tagName).toBe('DIV');
    });
  });
});

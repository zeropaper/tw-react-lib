import { render, screen } from '../../../../test/utils'
import { Quote } from './Quote'

describe('Quote', async () => {
  it('renders', () => {
    const { getByText } = render(
      <Quote>
        Hello World
      </Quote>,
    );

    expect(getByText('Hello World')).toBeInTheDocument();
  });
});

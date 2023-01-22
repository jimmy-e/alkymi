import { render, screen } from '@testing-library/react'
import PageHeader from './PageHeader';

// Wanted to write some integration tests but didn't have the time to bootstrap redux with jest

const setup = () => render(<PageHeader />);

describe('TableHeader Component', () => {
  it('renders the correct title', () => {
    setup();

    expect(screen.getByTestId('page-header-title')).toHaveTextContent('Data Inbox')
  });
});

import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Home from '@/app/page'
import UserButton from '@/app/components/UserButton'
import Footer from '@/app/components/footer';


describe("Footer", () => {
  /*it("renders a heading", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", {
      name: /welcome to next\.js!/i,
    });

    expect(heading).toBeInTheDocument();
  });
 */

  it("renders a Footer", () => {
      render(<Footer />);

      const footer = screen.getAllByRole('heading')

      expect(footer).toBeInTheDocument();
  })
});
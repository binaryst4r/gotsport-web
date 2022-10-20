import React from "react";
import { Button } from "..";
import { fireEvent, render, screen } from '@testing-library/react';

describe('Button component', () => {
  it('renders the correct text', async () => {
    const handleClick = jest.fn()

    render(
        <Button onClick={handleClick}>
          Test Button
        </Button>
      )
      const button = await screen.findByRole('button')
      expect(button).toBeInTheDocument()

      expect(screen.getByText('Test Button')).toBeInTheDocument()
      fireEvent.click(button)
      expect(handleClick).toHaveBeenCalled()
      expect(handleClick).toHaveBeenCalledTimes(1)
  })
})

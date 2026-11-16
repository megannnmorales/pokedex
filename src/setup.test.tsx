import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

test("renders, finds and clicks", async () => {
  const user = userEvent.setup();
  render(
    <button onClick={(e) => e.currentTarget.append(" (clicked)")}>
      Press me
    </button>,
  );

  const button = screen.getByRole("button", { name: "Press me" });
  expect(button).toBeInTheDocument();

  await user.click(button);
  expect(button).toHaveTextContent("clicked");
});

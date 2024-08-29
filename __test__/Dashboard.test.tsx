// app/__test__/Dashboard.test.tsx

import { render, screen } from "@testing-library/react";
import { useRouter } from "next/navigation";
import DashboardPage from "../dashboard/page"; // Adjust the path as necessary

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("DashboardPage", () => {
  it("should render the dashboard page", () => {
    render(<DashboardPage />);
    // Add your assertions here
  });

  it("should redirect unauthenticated users to the login page", () => {
    const mockPush = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({ push: mockPush });

    // Your logic to test redirection goes here
    expect(mockPush).toHaveBeenCalledWith("/login");
  });
});

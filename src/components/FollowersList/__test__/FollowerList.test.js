import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import FollowersList from "../FollowersList";

const MockFollowersList = () => {
  //to overcome router issue
  return (
    <BrowserRouter>
      <FollowersList />
    </BrowserRouter>
  );
};

describe("FollowerList", () => {
    it("Should render a follower card", async () => {
      render(<MockFollowersList />);
      const followerCard = await screen.findByTestId("follower-data-0");
      expect(followerCard).toBeInTheDocument();
    }); 

    // it("Should render multiple follower cards", async () => {
    //     render(<MockFollowersList />);
    //     const followerCard = await screen.findAllByTestId(/follower-data/i);
    //     expect(followerCard.length).toBe(5);
    //   }); 
})
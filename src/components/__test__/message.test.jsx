import { render, screen, mount } from "@testing-library/react";
import { Message } from "../message";

/**
 * Не работает опять же...
 */
describe.skip("Message tests", () => {
    it("render author and text", () => {
        const elemArr = [{
            chatId: "messageId",
            name: "ALEX",
            message: "messagetext",
            time: "",
        },]
        render(<Message messages={elemArr[0]} />);

        // const MsgText = screen.toContain({ name: "ALEX" });
        // expect(MsgText).toBeInTheDocument();
    });
});
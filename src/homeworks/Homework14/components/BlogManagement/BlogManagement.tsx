import { createContext, useState, type ChangeEvent } from "react";

import Card from "../Card/Card";
import Button from "components/Button/Button";
import Input from "components/Input/Input";
import { BlogManagementWrapper } from "./styles";

export const BlogManagementContext = createContext<string>("")


function BlogManagement() {
  const [userMessage, setUserMessage] = useState<string>("");
  const [postedMessage, setPostedMessage] = useState<string>("");

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setUserMessage(event.target.value);
  };

  const showMessage = () => {
    setPostedMessage(userMessage);
  };

  return (
    <BlogManagementContext.Provider value={postedMessage}>
      <BlogManagementWrapper>
        <Card />
        <Input
          name="message"
          placeholder="Enter your message"
          value={userMessage}
          onChange={onChangeInput}
        />
        <Button name="Post" onClick={showMessage} />
      </BlogManagementWrapper>
    </BlogManagementContext.Provider>
  );
}

export default BlogManagement;

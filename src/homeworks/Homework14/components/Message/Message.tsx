import { useContext } from "react";
import { MessageContainer, MessageWrapper} from "./styles"
import { BlogManagementContext } from "../BlogManagement/BlogManagement";

function Message() {
const message = useContext(BlogManagementContext);

  return (
    <MessageWrapper>
      <MessageContainer>{message}</MessageContainer>
    </MessageWrapper>
  )
}

export default Message;
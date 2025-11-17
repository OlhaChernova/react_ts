import { Link } from "react-router-dom";
import { ClientPage, Title } from "./styles";

function Clients() {
  return (
    <ClientPage>
      <Title>Select a company</Title>
      <Link to="adidas">Adidas</Link>
      <Link to="nike">Nike</Link>
      <Link to="Puma">Puma</Link>
    </ClientPage>
  );
}

export default Clients;

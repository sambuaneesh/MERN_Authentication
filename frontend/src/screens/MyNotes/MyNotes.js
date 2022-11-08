import { Button } from "react-bootstrap";
import MainScreen from "../../components/MainScreen";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function MyNotes() {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  return (
    <MainScreen title={`Welcome Back ${userInfo && userInfo.name}..`}>
      <Link to="#">
        <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
          Dummy Button
        </Button>
      </Link>
    </MainScreen>
  );
}

export default MyNotes;

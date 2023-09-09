import { Box } from "@mui/material";
import userImg from "assets/profile.png"

const UserImage = ({size = "60px" }) => {
  return (
    <Box width={size} height={size}>
      <img
        style={{ objectFit: "cover", borderRadius: "50%" }}
        width={size}
        height={size}
        alt="user"
        src={userImg}
      />
    </Box>
  );
};

export default UserImage;
import { Stack } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { pink } from "@mui/material/colors";
import { grey } from "@mui/material/colors";
export default function Like(props) {
  return (
    <Stack direction="column" sx={{ position: "absolute", ml: "85%", mt: 1 }}>
      {props.likes === props.id ? (
        <FavoriteIcon
          sx={{ color: pink[500], height: 30, width: 30 }}
          onClick={() => props.setLikes(false)}
        />
      ) : (
        <FavoriteIcon
          sx={{ color: grey[400], height: 30, width: 30 }}
          onClick={() => props.setLikes(props.id)}
        />
      )}

      <VisibilityIcon sx={{ color: grey[400], height: 30, width: 30 }} />
    </Stack>
  );
}

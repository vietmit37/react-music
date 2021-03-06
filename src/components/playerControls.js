import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import PauseRounded from "@mui/icons-material/PauseRounded";
import PlayArrowRounded from "@mui/icons-material/PlayArrowRounded";

import VolumeUpRounded from "@mui/icons-material/VolumeUpRounded";
import VolumeDownRounded from "@mui/icons-material/VolumeDownRounded";
import FastForwardIcon from "@mui/icons-material/FastForward";
import FastRewindIcon from "@mui/icons-material/FastRewind";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";

import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import { useDispatch } from "react-redux";
import VolumeMute from "@mui/icons-material/VolumeMute";

const Widget = styled("div")(({ theme }) => ({
  padding: 16,
  borderRadius: 16,
  width: 343,
  maxWidth: "100%",
  margin: "auto",
  position: "relative",
  zIndex: 1,
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(0,0,0,0.6)"
      : "rgba(255,255,255,0.15)",
}));

const CoverImage = styled("div")({
  width: 100,
  height: 100,
  objectFit: "cover",
  overflow: "hidden",
  flexShrink: 0,
  borderRadius: 8,
  backgroundColor: "rgba(0,0,0,0.08)",
  "& > img": {
    width: "100%",
  },
});

const TinyText = styled(Typography)({
  fontSize: "0.75rem",
  opacity: 0.38,
  fontWeight: 500,
  letterSpacing: 0.2,
});

export default function PlayerControls(props) {
  const theme = useTheme();
  const dispatch = useDispatch();
  const mainIconColor = theme.palette.mode === "dark" ? "#fff" : "#000";
  const lightIconColor =
    theme.palette.mode === "dark"
      ? "rgba(255,255,255,0.05)"
      : "rgba(0,0,0,0.4)";
  return (
    <Box sx={{ width: "100%", overflow: "hidden" }}>
      <Widget>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <CoverImage>
            <img
              alt="can't win - Chilling Sunday"
              src={`${props.detail.image}`}
              style={{ height: "100%", width: "100%", objectFit: "cover" }}
            />
          </CoverImage>
          <Box sx={{ ml: 1.5, minWidth: 0 }}>
            <Typography
              variant="caption"
              color="text.secondary"
              fontWeight={500}
            >
              {props.detail.singer}
            </Typography>
            <Typography noWrap>
              <b>{props.detail.nameMusic}</b>
            </Typography>
            <Typography noWrap letterSpacing={-0.25}>
              {props.detail.category} &mdash;
            </Typography>
          </Box>
        </Box>
        <Slider
          aria-label="time-indicator"
          size="small"
          value={props.played * 100}
          min={0}
          max={100}
          step={1}
          onChange={props.onSeek}
          sx={{
            color: theme.palette.mode === "dark" ? "#fff" : "rgba(0,0,0,0.87)",
            height: 4,
            "& .MuiSlider-thumb": {
              width: 8,
              height: 8,
              transition: "0.3s cubic-bezier(.47,1.64,.41,.8)",
              "&:before": {
                boxShadow: "0 2px 12px 0 rgba(0,0,0,0.4)",
              },
              "&:hover, &.Mui-focusVisible": {
                boxShadow: `0px 0px 0px 8px ${
                  theme.palette.mode === "dark"
                    ? "rgb(255 255 255 / 16%)"
                    : "rgb(0 0 0 / 16%)"
                }`,
              },
              "&.Mui-active": {
                width: 20,
                height: 20,
              },
            },
            "& .MuiSlider-rail": {
              opacity: 0.28,
            },
          }}
        />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mt: -2,
          }}
        >
          <TinyText>{props.elapsedTime}</TinyText>
          <TinyText>-{props.totalTime}</TinyText>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mt: -1,
          }}
        >
          <IconButton
            onClick={() => {
              props.onRewind();
            }}
          >
            <FastRewindIcon fontSize="small" htmlColor={mainIconColor} />
          </IconButton>
          <IconButton
            aria-label="previous song"
            onClick={() => {
              dispatch({
                type: "PREV_SONG",
                payload: props.detail,
              });
            }}
          >
            <SkipPreviousIcon fontSize="large" htmlColor={mainIconColor} />
          </IconButton>
          <IconButton
            onClick={() => {
              dispatch({
                type: "PLAY_PAUSE",
              });
            }}
          >
            {!props.playing ? (
              <PlayArrowRounded
                sx={{ fontSize: "3rem" }}
                htmlColor={mainIconColor}
              />
            ) : (
              <PauseRounded
                sx={{ fontSize: "3rem" }}
                htmlColor={mainIconColor}
              />
            )}
          </IconButton>
          <IconButton
            aria-label="next song"
            onClick={() => {
              dispatch({
                type: "NEXT_SONG",
                payload: props.detail,
              });
            }}
          >
            <SkipNextIcon fontSize="large" htmlColor={mainIconColor} />
          </IconButton>
          <IconButton
            onClick={() => {
              props.onFastForward();
            }}
          >
            <FastForwardIcon fontSize="small" htmlColor={mainIconColor} />
          </IconButton>
        </Box>
        <Stack
          spacing={2}
          direction="row"
          sx={{ mb: 1, px: 1 }}
          alignItems="center"
        >
          <IconButton
            onClick={() => {
              dispatch({
                type: "MUTE_MUSIC",
                payload: props.detail,
              });
            }}
          >
            {!props.muted ? (
              <VolumeDownRounded htmlColor={mainIconColor} />
            ) : (
              <VolumeMute Rounded htmlColor={lightIconColor} />
            )}
          </IconButton>

          <Slider
            aria-label="Volume"
            defaultValue={100}
            value={props.volume * 100}
            min={0}
            max={100}
            onChange={(_, value) => {
              dispatch({
                type: "SET_VOLUME",
                payload: value,
              });
            }}
            onChangeCommitted={() => {
              dispatch({
                type: "SET_VOLUME",
                payload: props.volume * 100,
              });
            }}
            sx={{
              color:
                theme.palette.mode === "dark" ? "#fff" : "rgba(0,0,0,0.87)",
              "& .MuiSlider-track": {
                border: "none",
              },
              "& .MuiSlider-thumb": {
                width: 24,
                height: 24,
                backgroundColor: "#fff",
                "&:before": {
                  boxShadow: "0 4px 8px rgba(0,0,0,0.4)",
                },
                "&:hover, &.Mui-focusVisible, &.Mui-active": {
                  boxShadow: "none",
                },
              },
            }}
          />
          <IconButton
            onClick={() => {
              dispatch({
                type: "MUTE_MUSIC",
                payload: props.detail,
              });
            }}
          >
            {!props.muted ? (
              <VolumeUpRounded htmlColor={mainIconColor} />
            ) : (
              <VolumeOffIcon htmlColor={lightIconColor} />
            )}
          </IconButton>
        </Stack>
      </Widget>
    </Box>
  );
}

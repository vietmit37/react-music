import data from "./data.json";
const initialState = {
  data,
  detail: data[0],
  playing: true,
  muted: false,
  volume: 0.5,
  played: 0,
  seeking: false,
};

export const musicReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PLAY_MUSIC":
      return {
        ...state,
        detail: action.payload,
        playing: true,
      };
    case "PLAY_PAUSE":
      const newData1 = [...state.data];
      newData1.forEach((item) => {
        if (item.id === action.payload.id) {
          state.playing = state.playing ? false : true;
        }
      });

      return { ...state, data: newData1 };
    case "NEXT_SONG":
      const newData2 = [...state.data];
      console.log(action.payload);

      newData2.forEach((item, index) => {
        if (item.id === action.payload.id) {
          if (index < newData2.length - 1) {
            state.playing = true;
            state.detail = newData2[index + 1];
          } else {
            state.detail = newData2[0];
            state.playing = true;
          }
        }
      });
      return { ...state, data: newData2 };
    case "PREV_SONG":
      const newData3 = [...state.data];
      newData3.forEach((item, index) => {
        if (item.id === action.payload.id) {
          if (index > 0) {
            state.playing = true;
            state.detail = newData3[index - 1];
          } else {
            state.playing = true;
            state.detail = newData3[newData3.length - 1];
          }
        }
      });
      return { ...state, data: newData3 };
    case "MUTE_MUSIC":
      return { ...state, muted: !state.muted };
    case "SET_VOLUME":
      return {
        ...state,
        volume: parseFloat(action.payload / 100),
        muted: action.payload === 0 ? true : false,
      };
    case "SET_PROGRESS":
      return {
        ...state,
        ...action.payload,
      };
    default:
      return { ...state };
  }
};

import data from "./data.json";
const initialState = {
  data,
  detail: data[0],
};

export const musicReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PLAY_MUSIC":
      const newData = [...state.data];
      if (!newData[action.payload].playing) {
        newData.forEach((item) => {
          item.playing = false;
        });
        newData[action.payload].playing = true;
      } else {
        newData[action.payload].playing = false;
      }
      console.log(123);
      return { ...state, detail: action.item, data: newData };
    case "PLAY_PAUSE":
      const newData1 = [...state.data];
      newData1.forEach((item) => {
        if (item.id === action.payload.id) {
          item.playing = !item.playing;
        }
      });

      return { ...state, data: newData1 };
    case "NEXT_SONG":
      const newData2 = [...state.data];

      newData2.forEach((item, index) => {
        if (item.id === action.payload.id) {
          if (index < newData2.length - 1) {
            newData2[index + 1].playing = true;
            newData2[index].playing = false;
            state.detail = newData2[index + 1];
          } else {
            newData2[0].playing = true;
            newData2[index].playing = false;
            state.detail = newData2[0];
          }
        }
      });
      console.log(action.payload);
      console.log(newData2);
      return { ...state, data: newData2 };
    case "PREV_SONG":
      const newData3 = [...state.data];
      newData3.forEach((item, index) => {
        if (item.id === action.payload.id) {
          if (index > 0) {
            newData3[index - 1].playing = true;
            newData3[index].playing = false;
            state.detail = newData3[index - 1];
          } else {
            newData3[newData3.length - 1].playing = true;
            newData3[index].playing = false;
            state.detail = newData3[newData3.length - 1];
          }
        }
      });
      return { ...state, data: newData3 };
    default:
      return { ...state };
  }
};

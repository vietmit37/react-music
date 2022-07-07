const initialState = {
  data: [
    {
      id: 1,
      url: "https://www.youtube.com/watch?v=JHSRTU31T14showinfo=0&enablejsapi=1&origin=http://localhost:3000",
      playing: false,
      singer: "Son Tung",
      nameMusic: "there's no one at all",
      category: "Pop",
      image: "./img/sonTung.jpg",
    },
    {
      id: 2,
      url: "https://www.youtube.com/watch?v=JxBnLmCOEJ8showinfo=0&enablejsapi=1&origin=http://localhost:3000",
      playing: false,
      singer: "Den vau",
      nameMusic: "Ai muon nghe khong",
      category: "Rap",
      image: "./img/den.jpg",
    },
  ],
  detail: [],
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
      console.log(action.item);
      return { ...state, detail: action.item, data: newData };
    default:
      return state;
  }
};

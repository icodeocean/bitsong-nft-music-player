export const useNavList = () => {
  return {
    menuList: [
      {
        title: "HOME",
        value: "home",
        icon: "mdi-home",
        to: "/",
      },
      {
        title: "MY BIDS",
        value: "myBids",
        icon: "mdi-currency-usd",
        to: "/mybids",
      },
      {
        title: "EXPLORE",
        value: "explore",
        icon: "mdi-magnify",
        to: "explore",
      },
      {
        title: "LIKED SONGS",
        value: "likedSongs",
        icon: "mdi-heart-outline",
        to: "/liked",
      },
      {
        title: "LIBRARY",
        value: "library",
        icon: "mdi-music-box-multiple-outline",
        to: "library",
      },
    ],
    playList: [
      {
        title: "playlist #1",
        value: "playlist1",
        to: "/playlist/1",
      },
      {
        title: "playlist #2",
        value: "playlist2",
        to: "/playlist/2",
      },
      {
        title: "playlist #3",
        value: "playlist3",
        to: "/playlist/3",
      },
    ],
  }
}

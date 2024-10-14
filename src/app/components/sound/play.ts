export const play = ({ item }: { item: string }) => {
  const audio = new Audio(item);
  audio.play();
};

"use client";

const ItemsMenuNavigationBar = ({
  items_menu_navigation,
  currentKey,
  currentMenuItem,
  changeMenuItem,
  playSound,
}: {
  items_menu_navigation: { id: number; name: string }[];
  currentKey: string;
  currentMenuItem: number;
  changeMenuItem: (index: number) => void;
  playSound: () => void;
}) => {
  return (
    <div className="flex gap-4 fade-in delay-2">
      <ul className="flex gap-4 max-sm:gap-1 items-center text-sm max-sm:text-xs">
        <li
          className={`cursor-pointer max-[400px]:hidden  transition-all  mr-5  px-2 py-1 font-bold bg-white rounded-sm uppercase tracking-wider ${
            currentKey === "q" ? "scale-95 opacity-55" : ""
          }`}
        >
          Q
        </li>
        {items_menu_navigation.map((item, index) => (
          <li
            key={item.id}
            onClick={() => {
              changeMenuItem(index);
              playSound();
            }}
            className={`cursor-pointer  px-3 ${
              currentMenuItem === index
                ? "bg-card/60 font-semibold"
                : "hover:bg-card/40 hover:text-white/100 text-white/60"
            } rounded-md text-white  py-1.5 uppercase tracking-wider`}
          >
            {item.name}
          </li>
        ))}
        <li
          className={`cursor-pointer max-[400px]:hidden   transition-all ml-5 px-2 py-1 font-bold bg-white rounded-sm uppercase tracking-wider ${
            currentKey === "c" ? "scale-95 opacity-55" : ""
          }`}
        >
          C
        </li>
      </ul>
    </div>
  );
};

export default ItemsMenuNavigationBar;

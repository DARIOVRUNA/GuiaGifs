import { useSelector } from "react-redux";
import { Gif } from "@/root/types/Gif.type";
import { GifItem } from "../gif-item/GifItem";
import { selectGifs } from "@/root/redux/selectors/gif-selector/gif.selector";
import { promotionPrice } from "@/root/constants/common.constants";

export const GifList = () => {
  const gifFoundList = useSelector(selectGifs);


  console.log(gifFoundList);

  return (
    <div className="grid grid-cols-3 gap-4 justify-center">
      {gifFoundList.length === 0 ? (
        <div className="text-center text-lg font-medium text-gray-600 dark:text-gray-400">
          No se encontraron resultados.
        </div>
      ) :
      gifFoundList.map((gif: Gif) => (
        <GifItem
          key={gif.id}
          title={gif.title}
          gifImageUrl={gif.url}
          price={promotionPrice}
        />
      ))}
    </div>
  );
};

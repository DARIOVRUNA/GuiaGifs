import { gifProvider } from "../../providers/gif-provider/gif.provider";
import { DispatchType,setGifs } from "../../reducers/gif-reducer/gifReducer";



export const startSetGif = (searchTerm: string): any => {
  return async (dispatch: DispatchType) => {
    const gifList = await gifProvider(searchTerm)

    dispatch(setGifs(gifList || []));
  };
};


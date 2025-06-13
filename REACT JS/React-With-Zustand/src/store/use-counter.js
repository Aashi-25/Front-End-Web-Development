import { create } from "zustand";

const useCounter = create((set) => {
    return {
        count : 0,
        listOfProducts : [],
        name : "Aashi Goel",
        handleIncrementCount : ()=> set((state)=> ({
            count : state.count + 1,
        })),

        fetchListOfProducts : async()=> {
            const apiResponse = await fetch('https://dummyjson.com/products');
            const result = await apiResponse.json();

            set({
                listOfProducts: result?.products,
            })
        }
    }
})

export default useCounter;
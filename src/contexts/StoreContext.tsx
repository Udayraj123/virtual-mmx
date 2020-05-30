import { createContext, useContext } from "react";
import { GlobalStore } from "./globalStore";
import { EditorStore } from "./editorStore";

const global = new GlobalStore();
const editor = new EditorStore(global); // needs reference to global store

export const storesContext = createContext({ global, editor });

export const useStores = () => useContext(storesContext);

// just a handy template
/*
export const  = observer((props: ) => {
	const { editor } = useStores();
	const store = useLocalStore(
		(s) => ({

		}),
		props
	);
	return (

	);
});
*/

// probably dont need any of this... it'll stay just to be safe. for now

// const [GlobalContext, GlobalContextProvider, globalStore] = makeContext(
// 	createGlobalStore
// );
// const [EditorContext, EditorContextProvider] = makeContext(() =>
// 	createEditorStore(globalStore)
// );

// export default {
// 	GlobalContext,
// 	GlobalContextProvider,
// 	EditorContext,
// 	EditorContextProvider,
// };

// type MakeContextResult<T> = [
// 	React.Context<T>, // context
// 	({ children }: { children: SomeReactChildren }) => JSX.Element, // provider
// 	T // store
// ];

// function makeContext<T>(storeBuilder: () => T): MakeContextResult<T> {
// 	const store = observable.object(storeBuilder());
// 	const Context = React.createContext(store);
// 	return [
// 		Context,
// 		({ children }: { children: SomeReactChildren }) => {
// 			return <Context.Provider value={store}>{children}</Context.Provider>;
// 		},
// 		store,
// 	];
// }

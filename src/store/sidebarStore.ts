import {atom, useAtom} from "jotai";

const sidebarStore = atom<{isMinimize?: boolean}>({
  isMinimize: false,
});

export {useAtom, sidebarStore};

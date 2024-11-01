// state/usersAtom.js
import { atom } from 'recoil';

// Define an atom to hold user data
export const usersAtom = atom({
  key: 'usersAtom', // unique ID (with respect to other atoms/selectors)
  default: [], // default value (aka initial value)
});

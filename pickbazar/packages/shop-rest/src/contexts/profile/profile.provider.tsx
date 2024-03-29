import React, { useReducer } from 'react';
import { v4 as uuidV4 } from 'uuid';
import schedules from 'features/checkouts/data';
import { ProfileContext } from './profile.context';

type Action =
  | { type: 'HANDLE_ON_INPUT_CHANGE'; payload: any }
  | { type: 'GOT_ALL_ADDRESS'; payload: any }
  | { type: 'ADD_OR_UPDATE_CONTACT'; payload: any }
  | { type: 'DELETE_CONTACT'; payload: any }
  | { type: 'ADD_OR_UPDATE_ADDRESS'; payload: any }
  | { type: 'DELETE_ADDRESS'; payload: any }
  | { type: 'ADD_CARD'; payload: any }
  | { type: 'DELETE_CARD'; payload: any }
  | { type: 'SET_PRIMARY_CONTACT'; payload: any }
  | { type: 'SET_PRIMARY_ADDRESS'; payload: any }
  | { type: 'SET_PRIMARY_SCHEDULE'; payload: any }
  | { type: 'SET_PRIMARY_CARD'; payload: any };
  
function handleCheck(stateData, val) {
  return this.state.data.some(item => val.id === item.id);
}
function updateOject(oldObject,newObject){
    return Object.assign({},oldObject,newObject)
}
function reducer(state: any, action: Action): any {
  switch (action.type) {
    case 'HANDLE_ON_INPUT_CHANGE':
      return { ...state, [action.payload.field]: action.payload.value };
    case 'ADD_OR_UPDATE_CONTACT':
      if (action.payload.id) {
        return {
          ...state,
          contact: state.contact.map((item: any) =>
            item.id === action.payload.id
              ? { ...item, ...action.payload }
              : item
          ),
        };
      }
      const newContact = {
        ...action.payload,
        id: uuidV4(),
        type: state.contact.length === '0' ? 'primary' : 'secondary',
      };
      return {
        ...state,
        contact: [...state.contact, newContact],
      };

    case 'DELETE_CONTACT':
      return {
        ...state,
        contact: state.contact.filter(
          (item: any) => item.id !== action.payload
        ),
      };
    // case 'ADD_OR_UPDATE_ADDRESS':
    //   if (action.payload.id) {
    //     return {
    //       ...state,
    //       address: state.address.map((item: any) =>
    //         item.id === action.payload.id
    //           ? { ...item, ...action.payload }
    //           : item
    //       ),
    //     };
    //   }
    //   const newAdress = {
    //     ...action.payload,
    //     id: uuidV4(),
    //     type: state.address.length === '0' ? 'primary' : 'secondary',
    //   };
    //   return {
    //     ...state,
    //     address: [...state.address, newAdress],
    //   };

    case 'ADD_OR_UPDATE_ADDRESS':
      const stateaddressClone = [...state.address]
      const foundAddressItem = state.address.filter(
        (item: any) => item.id === action.payload.id
      )
      if (foundAddressItem.length > 0) {
        //Update the existing
        let updatedAddList = state.address.map((item: any) => {
          if (item.id === action.payload.id) {
            return { ...item, ...action.payload }
          } else {
            return item;
          }
        })
        return {
          ...state,
          address: [...updatedAddList],
        };
      } else {
        //add new item
        return {
          ...state,
          address: [...state.address, action.payload],
        };
      }
    case 'DELETE_ADDRESS':
      return {
        ...state,
        address: state.address.filter(
          (item: any) => item.id !== action.payload
        ),
      };
    case 'ADD_CARD':
      const newCard = {
        id: action.payload.id,
        type: state.card.length === '0' ? 'primary' : 'secondary',
        cardType: action.payload.brand.toLowerCase(),
        name: state.name,
        lastFourDigit: action.payload.last4,
      };
      return {
        ...state,
        card: [newCard, ...state.card],
      };
    case 'DELETE_CARD':
      return {
        ...state,
        card: state.card.filter((item: any) => item.id !== action.payload),
      };
    case 'SET_PRIMARY_CONTACT':
      return {
        ...state,
        contact: state.contact.map((item: any) =>
          item.id === action.payload
            ? { ...item, type: 'primary' }
            : { ...item, type: 'secondary' }
        ),
      };
    // case 'SET_PRIMARY_ADDRESS':
    //   return {
    //     ...state,
    //     address: state.address.map((item: any) =>
    //       item.id === action.payload
    //         ? { ...item, type: 'primary' }
    //         : { ...item, type: 'secondary' }
    //     ),
    //   };
    case 'SET_PRIMARY_ADDRESS':
      return {
        ...state,
        address: state.address.map((item: any) =>
          item.id == action.payload
            ? { ...item, "is_default_for_shipping": true }
            : { ...item, "is_default_for_shipping": false }
        ),
      };

      case 'GOT_ALL_ADDRESS':
        return  updateOject(state,{
          address : action.payload
        }) 
     case 'SET_PRIMARY_SCHEDULE':
      return {
        ...state,
        schedules: state.schedules.map((item: any) =>
          item.id === action.payload
            ? { ...item, type: 'primary' }
            : { ...item, type: 'secondary' }
        ),
      };
    case 'SET_PRIMARY_CARD':
      return {
        ...state,
        card:((item: any) =>
          item.target.value === action.payload
        ),
      };
    default:
      return state;
  }
}

type ProfileProviderProps = {
  initData: any;
};

export const ProfileProvider: React.FunctionComponent<ProfileProviderProps> = ({
  children,
  initData,
}) => {
  const [state, dispatch] = useReducer(reducer, { ...initData, schedules ,address:{} });

  return (
    <ProfileContext.Provider value={{ state, dispatch }}>
      {children}
    </ProfileContext.Provider>
  );
};

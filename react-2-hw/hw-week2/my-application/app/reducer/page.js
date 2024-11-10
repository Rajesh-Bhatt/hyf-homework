"use client";

import { useReducer } from "react";
import Chat from "./Chat";
import ContactList from "./ContactList";
import { initialState, messengerReducer } from "./messengerReducer";

export default function Messenger() {
  const [state, dispatch] = useReducer(messengerReducer, initialState);

  const message = state.message;
  const contact = contacts.find((c) => c.id === state.selectedId);

  if (!contact) {
    return <div>No contact found</div>;
  }

  return (
    <div className={"flex gap-1"}>
      <ContactList
        contacts={contacts}
        selectedId={state.selectedId}
        dispatch={dispatch}
      />
      <Chat
        key={contact.id}
        message={message}
        contact={contact}
        dispatch={dispatch}
      />
    </div>
  );
}

const contacts = [
  { id: 0, name: "Kristain", email: "eve@mail.com" },
  { id: 1, name: "Charlie", email: "charlie@mail.com" },
  { id: 2, name: "David", email: "david@mail.com" },
  { id: 3, name: "Grace", email: "grace@mail.com" },
  { id: 4, name: "Henry", email: "henry@mail.com" },
];

export default function ContactList({contacts, selectedId, dispatch}) {
    return (
        <section>
            <ul className={'flex flex-col gap-2'}>
                {contacts.map((contact) => (
                    <li key={contact.id} className={'bg-gray-300 hover:bg-gray-400 p-2'}>
                        <button
                            onClick={() => {
                                dispatch({
                                    type: 'changed_selection',
                                    contactId: contact.id, 
                                });
                            }}>
                            {selectedId === contact.id ? <b>{contact.name}</b> : contact.name}
                        </button>
                    </li>
                ))}
            </ul>
        </section>
    );
}

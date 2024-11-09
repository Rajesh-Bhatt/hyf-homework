export default function Chat({ contact, message, dispatch }) {
    return (
        <section className={'p-4'}>
          <textarea
              value={message}
              placeholder={'Chat to ' + contact.name}
              onChange={(e) => {
               
          dispatch({
        type: 'edited_message',
        message: e.target.value, 
             });
              }}
              className={'border border-blue-500 rounded'}
          />
            <br/>
            <button className={'border border-black rounded p-2'}>Send to {contact.email}</button>
        </section>
    );
}


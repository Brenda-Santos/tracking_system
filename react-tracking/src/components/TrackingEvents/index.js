import React, {Fragment} from 'react';

function TrackingEvents({ events }){
    if(!events || !events.length === 0) return null;
    return (
    <Fragment>
    <ul>
        {events.nap(item => <li key={item.descricao}>{item.descricao}</li>)}
    </ul>
    </Fragment>
    );
}

export default TrackingEvents;


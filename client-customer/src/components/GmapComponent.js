import React, { Component } from 'react';

class Gmap extends Component {
    render(){
        return(
            <div className="align-center">
                <h2 className="text-name">MY LOCATION</h2>
                <iframe  title="gmap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.1987350845857!2d106.65274791062082!3d10.796085689309484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529343321ba93%3A0xbc1763280412c59b!2zMTAgxJAuIFh1w6JuIERp4buHdSwgUGjGsOG7nW5nIDQsIFTDom4gQsOsbmgsIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1721410283350!5m2!1svi!2s " width="800" height="600" style={{ border:0 }}  loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>"
            </div>
        );
    }
}
export default Gmap;


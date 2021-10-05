import * as socketio from 'socket.io';
import Marker from './marker';
import MarkerList from './marker-list';

export default class Sockets {
    io: socketio.Server;
    markerList: MarkerList;

    constructor( io: socketio.Server ) {
        this.io = io;
        this.markerList = new MarkerList();
        this.socketEvents();
    }

    socketEvents() {
        // On connection
        this.io.on('connection', ( socket ) => {

            console.log('Cliente conectado');

            socket.emit('active-markers', this.markerList.actives);

            socket.on('new-marker', (marker: Marker) => {
                this.markerList.addMarker(marker);
                socket.broadcast.emit('new-marker', marker);
                
            });

            socket.on('update-marker', (marker: Marker) => {
                this.markerList.updateMarker(marker);
                socket.broadcast.emit('update-marker', marker);
            });
        
        });
    }

};
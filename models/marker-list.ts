import Marker from "./marker";

type Dictionary<TValue> = {
    [id: string]: TValue;
};

export default class MarkerList {
    actives: Dictionary<Marker>;

    constructor() {
        this.actives = {};
    }

    addMarker(marker: Marker) {
        this.actives[marker.id] = marker;
        return marker;
    }

    removeMarker(id: string) {
        delete this.actives[id];
    }

    updateMarker(marker: Marker) {
        this.actives[marker.id] = marker;
        return marker;
    }

}
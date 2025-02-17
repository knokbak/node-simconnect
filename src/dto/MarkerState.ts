import { SimConnectData } from './SimConnectData';
import { RawBuffer } from '../RawBuffer';

class MarkerState implements SimConnectData {
    markerName = '';

    markerState = false;

    read(buffer: RawBuffer) {
        this.markerName = buffer.readString64();
        this.markerState = buffer.readInt() !== 0;
    }

    write(buffer: RawBuffer) {
        buffer.writeString64(this.markerName);
        buffer.writeInt(this.markerState === true ? 1 : 0);
    }
}

export { MarkerState };

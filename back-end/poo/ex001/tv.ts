class Tv {
  private _brand: string;
  private _size: number;
  private _resolution: string;
  private _connections: string[];
  private _connectedTo?: string;

  constructor(brand: string, size: number, resolution: string, connections: string[]) {
    this._brand = brand;
    this._size = size;
    this._resolution = resolution;
    this._connections = connections;
  }

  turnOn() {
    console.log(this._brand, this._size, this._resolution, this._connections);
  }

  get connectedTo(): string | undefined  {
    return this._connectedTo;
  }

  set connectedTo(connection: string | undefined) {
    if (!connection || this._connections.includes(connection)) {
      this._connectedTo = connection;
      console.log(this._connectedTo);
    } else {
      console.log('Sorry, connection unavailable!');
    }
  }
}

const SMI = new Tv('Semp Toshiba', 42, '1440p', [ 'HDMI', 'Ethernet', 'USB 3.0' ]);

SMI.turnOn();

SMI.connectedTo = 'HDMI';
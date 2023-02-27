const stuff: (string | number)[] = [1, "asdf", 3, "sd"];

let myTuple: [number, string];

myTuple = [1, "asdf"];

const color: [number, number, number] = [255, 0, 255];

type HTTPResponse = [number, string];

const goodRes: HTTPResponse = [200, "OK"];

const responses: HTTPResponse[] = [
  [200, "OK"],
  [404, "Not Found"],
];

enum OrderStatus {
  PENDING,
  SHIPPED,
  DELIVERED,
  RETURNED,
}

const myStatus: OrderStatus = OrderStatus.DELIVERED;

function isDelivered(status: OrderStatus): boolean {
  return status === OrderStatus.DELIVERED;
}

isDelivered(OrderStatus.RETURNED); // false
isDelivered(OrderStatus.DELIVERED); // true

enum ArrowKeys {
  UP = "up",
  DOWN = "down",
  LEFT = "left",
  RIGHT = "right",
}

function nextDirection(direction: ArrowKeys): ArrowKeys {
  switch (direction) {
    case ArrowKeys.UP:
      return ArrowKeys.RIGHT;
    case ArrowKeys.RIGHT:
      return ArrowKeys.DOWN;
    case ArrowKeys.DOWN:
      return ArrowKeys.LEFT;
    case ArrowKeys.LEFT:
      return ArrowKeys.UP;
  }
}

function prevDirection(direction: ArrowKeys): ArrowKeys {
  switch (direction) {
    case ArrowKeys.UP:
      return ArrowKeys.LEFT;
    case ArrowKeys.LEFT:
      return ArrowKeys.DOWN;
    case ArrowKeys.DOWN:
      return ArrowKeys.RIGHT;
    case ArrowKeys.RIGHT:
      return ArrowKeys.UP;
  }
}

// refactor the last two functions to reduce code duplication using a helper function

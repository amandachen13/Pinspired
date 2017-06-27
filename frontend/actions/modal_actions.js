export const OPEN = "OPEN";
export const CLOSE = "CLOSE";
export const RECEIVE_COMPONENT = "RECEIVE_COMPONENT";

export const close = () => ({
  type: CLOSE,
  component: null
});

export const open = component => ({
  type: OPEN,
  component
});

export const receiveComponent = component => ({
  type: RECEIVE_COMPONENT,
  component
});

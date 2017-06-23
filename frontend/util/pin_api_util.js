export const fetchAllPins = () => (
  $.ajax({
    method: 'GET',
    url: '/api/pins'
  })
);

export const fetchSinglePin = id => (
  $.ajax({
    method: 'GET',
    url: `api/pins/${id}`
  })
);

export const createPin = pin => (
  $.ajax({
    method: 'POST',
    url: '/api/pins',
    data: {pin}
  })
);

export const updatePin = pin => (
  $.ajax({
    method: 'PATCH',
    url: `/api/pins/${pin.id}`,
    data: {pin}
  })
);

export const deletePin = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/pins/${id}`
  })
);

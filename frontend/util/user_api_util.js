export const fetchUser = username => (
  $.ajax({
    method: 'GET',
    url: `api/users/${username}`
  })
);

export const editUser = (formData, username) => (
  $.ajax({
    method: 'PATCH',
    url: `api/users/${username}`,
    contentType: false,
    processData: false,
    data: formData
  })
)

export const createFollow = following_id => (
  $.ajax({
    method: 'POST',
    url: 'api/follows',
    data: { following_id }
  })
);

export const deleteFollow = following_id => (
  $.ajax({
    method: "DELETE",
    url: `/api/follows/${following_id}`
  })
);

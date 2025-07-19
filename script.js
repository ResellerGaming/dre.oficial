function order(item) {
  const username = "andzcintaaaraa";
  const text = `Halo, saya ingin order ${item}`;
  const url = `https://t.me/${username}?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank');
}

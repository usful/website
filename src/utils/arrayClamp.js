export default function arrayClamp(next, arr) {
  if (next > arr.length - 1) {
    return 0;
  }

  if (next < 0) {
    return arr.length - 1;
  }

  return next;
}

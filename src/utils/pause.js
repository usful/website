/**
 * Async await paus for x ms
 * @param wait the ms to pause for
 */
export default function pause(wait = 100) {
  return new Promise(resolve => {
    setTimeout(() => resolve(), wait);
  });
}

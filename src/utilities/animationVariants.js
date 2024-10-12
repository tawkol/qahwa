export const fadeIn = (dir = false, delay = 0, duration = 1.2, ease = [0.25, 0.25, 0.25, 0.75]) => {
  let x = 0, y = 0;

  // Set x or y offset based on the direction
  if (dir === "up") y = 40;
  if (dir === "down") y = -40;
  if (dir === "left") x = 40;
  if (dir === "right") x = -40;

  return {
    hidden: {
      opacity: 0,
      x, // x offset
      y, // y offset
    },
    show: {
      opacity: 1,
      x: 0, // reset x to 0 when shown
      y: 0, // reset y to 0 when shown
      transition: {
        type: "tween",
        duration,
        delay,
        ease,
      },
    },
  };
};

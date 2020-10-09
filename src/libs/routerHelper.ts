export const routeHelper = (route: string): boolean => {
  const location = window.location.pathname;

  if (route === location) return true;
  else return false;
};

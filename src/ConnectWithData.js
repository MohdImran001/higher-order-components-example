const ConnectWithSearch = (WrappedComponent) => {
  const SuperChargedComponent = () => {};

  return SuperChargedComponent;
};

const getDisplayName = (WrappedComponent) => {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
};

export default ConnectWithSearch;

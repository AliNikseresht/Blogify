const formatDate = (seconds: number) =>
  new Date(seconds * 1000).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
  });

export default formatDate;

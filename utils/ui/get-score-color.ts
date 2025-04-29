export const getScoreColor = (score = 0) => {
  if (score >= 0.7) return "text-emerald-500";
  if (score >= 0.4) return "text-blue-500";
  return "text-rose-500";
};

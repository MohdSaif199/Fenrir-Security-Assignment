const styles = {
  Completed: "bg-green-50 text-green-600 border border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800/40",
  Scheduled: "bg-gray-100 text-gray-500 border border-gray-200 dark:bg-gray-800/40 dark:text-gray-400 dark:border-gray-700/50",
  Failed: "bg-red-50 text-red-500 border border-red-200 dark:bg-red-900/20 dark:text-red-400 dark:border-red-800/40",
};

export default function StatusBadge({ status }) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium ${
        styles[status] ?? styles.Scheduled
      }`}
    >
      {status}
    </span>
  );
}

const FeedbackPagination = ({ page, setPage, totalPages }) => {
  return (
    <div className="flex justify-center items-center gap-2 mt-8">
      {/* Previous */}
      <button
        onClick={() => setPage((p) => p - 1)}
        disabled={page === 1}
        className="px-4 py-2 rounded-full border border-slate-200 text-sm font-medium
        hover:bg-[#00A8E7] hover:text-white transition
        disabled:opacity-40 disabled:cursor-not-allowed"
      >
        ← Prev
      </button>

      {/* Page Numbers */}
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
        <button
          key={p}
          onClick={() => setPage(p)}
          className={`w-8 h-8 rounded-full text-sm font-medium transition
            ${
              page === p
                ? "bg-[#00A8E7] text-white shadow-md scale-110"
                : "border border-slate-300 hover:bg-slate-300"
            }`}
        >
          {p}
        </button>
      ))}

      {/* Next */}
      <button
        onClick={() => setPage((p) => p + 1)}
        disabled={page === totalPages}
        className="px-4 py-2 rounded-full border text-sm font-medium
        hover:bg-[#00A8E7] hover:text-white transition
        disabled:opacity-40 disabled:cursor-not-allowed"
      >
        Next →
      </button>
    </div>
  );
};

export default FeedbackPagination;

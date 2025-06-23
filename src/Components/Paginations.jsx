export default function Paginations({
  currentPage,
  setCurrentPage,
  numOfPages,
  handleClick,
}) {
  return (
    <div className="btn_pagination">
      <button
        disabled={currentPage == 0}
        onClick={() => setCurrentPage((prev) => prev - 1)}
      >
        prev
      </button>
      {[...Array(numOfPages).keys()].map((Element) => {
        return (
          <div
            className={"btns_each " + (Element == currentPage ? "active" : "")}
          >
            <button className="btns" onClick={() => handleClick(Element)}>
              {Element}
            </button>
          </div>
        );
      })}
      <button
        disabled={currentPage == numOfPages - 1}
        onClick={() => setCurrentPage((prev) => prev + 1)}
      >
        Next
      </button>
    </div>
  );
}

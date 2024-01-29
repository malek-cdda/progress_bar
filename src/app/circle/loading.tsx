export default function Loading() {
  return (
    <div className="flex  ">
      {[...new Array(10)].map((p, index) => (
        <article key={index} className="flex flex-wrap">
          <div className="rounded-lg w-16 h-16 border"></div>
        </article>
      ))}
    </div>
  );
}

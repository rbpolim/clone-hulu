import Thumbnail from "./Thumbnail";

const Results = ({ results }) => {
  return (
    <section className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3">
      {results.map((result) => (
        <Thumbnail key={result.id} result={result} />
      ))}
    </section>
  );
};

export default Results;

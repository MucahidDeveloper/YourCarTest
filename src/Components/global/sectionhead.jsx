function headLine(props) {
  const id = props.id;
  const toUpper = id.toUpperCase();

  return (
    <>
      <h2 className="sectionHeadLine">{toUpper}</h2>
      <h3
        className={props.color}
        style={{ textAlign: "center", marginLeft: "2.4rem" }}
      >
        {id}
      </h3>
    </>
  );
}

export default headLine;

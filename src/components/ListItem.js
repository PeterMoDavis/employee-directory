import React from "react";

function ListItem(props) {
  const styles = {
    img: {
      width: "75px",
    },
  };
  return (
    <tr className="d-flex justify-content-between border-bottom align-items-center">
      <td className="border-0">
        {" "}
        <img style={styles.img} src={props.picture} alt="" />{" "}
      </td>
      <td className="border-0">
        {props.first} {props.last}
      </td>
      <td className="border-0">
        {props.phone
          .replace(/[-\(\) ]/gi, "")
          .replace(/(\d{3})(\d{3})(\d{4})/, "($1)-$2-$3")}
      </td>
      <td className="border-0">
        {" "}
        <a href="emailto:">{props.email}</a>
      </td>
      <td className="border-0">{props.DOB}</td>
    </tr>
  );
}

export default ListItem;

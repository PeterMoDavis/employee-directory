import React from "react";

function ListItem() {
  const styles = {
    img: {
      width: "75px",
    },
  };
  return (
    <tr className="d-flex justify-content-around border-bottom align-items-center">
      <td className="border-0">
        {" "}
        <img
          style={styles.img}
          src="https://i.picsum.photos/id/729/200/200.jpg?hmac=hCw_uurY9O39ITS0MMk7fNNdWPaY20TzXz2NTAkEslU"
          alt=""
        />{" "}
      </td>
      <td className="border-0">Gary "Big Dog" Johnson</td>
      <td className="border-0">(222)222-2222</td>
      <td className="border-0">
        {" "}
        <a href="emailto:">gary@email.com</a>
      </td>
      <td className="border-0">02-22-74</td>
    </tr>
  );
}

export default ListItem;

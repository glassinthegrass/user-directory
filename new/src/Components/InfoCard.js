import React from "react";

/* 
{
    id: 25,
    name: { first: "Mikaela", last: "Jeannequin" },
    city: "Tha Maka",
    country: "Thailand",
    employer: null,
    title: null,
    favoriteMovies: [
      "Book of Love",
      "I Heart Huckabees",
      "Howard Zinn: You Can't Be Neutral on a Moving Train"
    ]
*/

const InfoCard = (props) => {
  const { data, index } = props;

    return (
    <div className="card">
      <div className="card-number">
        <h1>{`${data.name.first} ${data.name.last}`}</h1>
      </div>
            <h3><strong>From:</strong> {data.city},{data.country}</h3>
      <ul>
        {data.favoriteMovies.map((element) => (
          <li>{element}</li>
        ))}
      </ul>
    </div>
  );
};

export default InfoCard;

import { useState } from "react";

const Home = () => {
  const [text, setText] = useState("");

  const handleSubmit = async () => {
    const requestOptions = {
      method: "GET",
      credentials: "include",
    };

    const backendUrl = "http://localhost:5000";

    try {
      const response = await fetch(backendUrl, requestOptions);
      const data = await response.json();

      if (response.ok) {
        setText(data); // Ensure data is displayable as text
      }
    } catch (error) {
      console.log(error);
      setText("Error fetching data. Please try again later.");
    }
  };

  return (
    <div className="text-center">
      <h2>Welcome to the Student Discounts Map!</h2>
      <iframe
        title="Local Student Discounts Map"
        width="425"
        height="350"
        src="https://www.openstreetmap.org/export/embed.html?bbox=-75.36861419677734%2C39.85730997290123%2C-74.96006011962892%2C40.04575171819509&amp;layer=mapnik&amp;marker=39.95159574030591%2C-75.16433715820312"
      ></iframe>
      <br />
      <small>
        <a href="https://www.openstreetmap.org/?mlat=39.9516&amp;mlon=-75.1643#map=12/39.9516/-75.1643">
          View Larger Map
        </a>
      </small>
      <p>
        FOR students looking for up-to-date information on student discounts and
        community-sourced information on deals, discounts, and locations, THE
        Student Discounts Map is an interactive web application THAT provides a
        platform for users to share, discover, and review student discounts and
        other deals based on geographical locations, in a community setting.
      </p>
      <p>
        UNLIKE existing discount websites, which often lack community engagement
        and interactive mapping features, OUR product encourages users
        themselves to contribute, rate submissions, and explore discounts
        conveniently on an interactive map, enhancing the overall user
        experience, as well as allowing for a self-sustaining environment for
        active users.
      </p>
    </div>
  );
};

export default Home;

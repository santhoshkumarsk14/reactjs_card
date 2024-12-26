import logo from './logo.svg';
import './App.css';

function Intro(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.desc}</p>
    </div>
  );
}

function Profile(props) {
  return (
    <div className="profile">
      <img className="profilePic" src="photos/profile.png" alt="profile" />
    </div>
  );
}

const skillItemStyle = (color) => ({
  padding: "10px",
  border: `2px solid ${color}`,
  borderRadius: "5px",
  backgroundColor: `${color}`,
  textAlign: "center",
});

const Skills = ({ skill, level, color }) => {
  return (
    <div style={skillItemStyle(color)}>
      <strong>{skill}</strong> - {level}
    </div>
  );
};

function App() {
  const style = {
    border: "2px solid black",
    padding: "20px",
    borderRadius: "10px",
    width: "400px", // Set width for the card
    margin: "10px", // Add margin for spacing between cards
    textAlign: "center",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", // Add a subtle shadow
    backgroundColor: "#f9f9f9", // Light background color
  };

  const skillsStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr", // Two columns for side-by-side layout
    gap: "10px", // Spacing between items
    marginTop: "20px",
  };

  const containerStyle = {
    display: "flex", // Flexbox layout for arranging cards
    flexWrap: "wrap", // Wrap cards to the next row if space runs out
    justifyContent: "center", // Center the cards horizontally
  };

  const desc =
    "A motivated full stack developer with over 3 plus years of experience in designing and delivering scalable web applications using technologies such as Java, Spring Boot, Rest API, and MySQL. Proven track record of collaborating with cross-functional teams to meet dynamic project requirements, resulting in improved application performance. Adapt at creating robust solutions that drive business growth and user satisfaction.";

  return (
    <div style={containerStyle}>
      {/* Card 1 */}
      <section style={style}>
        <Profile  image="photos/profile.png" />
        <Intro
          name="Santhoshkumar Ravichandran"
          desc={desc}
        />
        <div style={skillsStyle}>
          <Skills skill="HTML,CSS" level="💪" color="#1696f2" />
          <Skills skill="JavaScript" level="💪" color="#12c757" />
          <Skills skill="Java,Jsp" level="💪" color="#e84c41" />
          <Skills skill="Spring Boot" level="👍" color="#c98e18" />
          <Skills skill="Hibernate" level="👍" color="#8fa10a" />
          <Skills skill="Microsevices" level="👍" color="#e33664" />
        </div>
      </section>

      {/* Card 2 */}
      <section style={style}>
        <Profile image="photos/profile.png" />
        <Intro
          name="John Doe"
          desc="An aspiring software engineer skilled in front-end technologies like React, JavaScript, and CSS. Dedicated to learning and growing in the field of development."
        />
        <div style={skillsStyle}>
          <Skills skill="React Js" level="💪" color="#bd1bf7" />
          <Skills skill="MYSql,MS Sql" level="👍" color="#e33664" />
          <Skills skill="Python" level="👶" color="#91a8db" />
        </div>
      </section>

      {/* Card 3 */}
      <section style={style}>
        <Profile image="photos/profile.png" />
        <Intro
          name="Jane Smith"
          desc="Experienced back-end developer specializing in Java, Spring Boot, and database systems like PostgreSQL and MongoDB."
        />
        <div style={skillsStyle}>
          <Skills skill="Java" level="💪" color="#e84c41" />
          <Skills skill="PostgreSQL" level="👍" color="#336791" />
          <Skills skill="MongoDB" level="👍" color="#47A248" />
        </div>
      </section>
    </div>
  );
}

export default App;

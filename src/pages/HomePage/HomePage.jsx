import style from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={style.wrapper}>
      <h1 className={style.title}>Welcome to React Phonebook!</h1>
      <p>
        This application helps you store and manage your contacts easily. With
        React Phonebook, you can add, edit, delete, and search through your
        contacts, all from one convenient place.
      </p>
      <div>
        <h2>The app is built using modern web technologies, including: </h2>
        <ul>
          <li>React.js</li>
          <li>Redux</li>
          <li>API</li>
          <li>Axios</li>
          <li>Router</li>
        </ul>
      </div>
    </div>
  );
};
export default HomePage;

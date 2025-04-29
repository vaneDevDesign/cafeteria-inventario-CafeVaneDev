import "../styles/Header.css";
import logo from "../assets/logo.png";

type Props = {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
};

function Header({ searchTerm, setSearchTerm }: Props) {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="CafeVaneDev logo" /> CafeVaneDev
      </div>
      <input
        type="text"
        placeholder="Buscar Productos"
        className="search-input"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </header>
  );
}

export default Header;
